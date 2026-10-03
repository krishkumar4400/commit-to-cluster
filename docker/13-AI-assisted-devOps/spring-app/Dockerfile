# FROM eclipse-temurin:21-jdk

# WORKDIR /home/app

# COPY target/app.jar app.jar

# EXPOSE 8080

# CMD [ "java", "-jar", "app.jar" ]


# optimized
# ──────────────────────────────────────────────────────────────────
# Stage 1: Build
# Uses Maven Alpine image — only needed at build time, not shipped
# ──────────────────────────────────────────────────────────────────
FROM maven:3.9-eclipse-temurin-21-alpine AS build

WORKDIR /build

# Cache dependencies BEFORE copying source
# This layer is reused unless pom.xml changes
COPY pom.xml .
RUN mvn dependency:go-offline -q

# Now copy source and build
COPY src/ src/
RUN mvn package -DskipTests -q

# ──────────────────────────────────────────────────────────────────
# Stage 2: Layer Extraction
# Splits the fat JAR into 4 layers ordered by change frequency
# Spring Boot 2.3+ supports this natively via -Djarmode=layertools
# ──────────────────────────────────────────────────────────────────
FROM eclipse-temurin:21-jre-alpine AS extract

WORKDIR /extract
COPY --from=build /build/target/*.jar app.jar
RUN java -Djarmode=layertools -jar app.jar extract

# ──────────────────────────────────────────────────────────────────
# Stage 3: Runtime
# Only this image gets shipped — no build tools, no JDK, no Maven
# ──────────────────────────────────────────────────────────────────
FROM eclipse-temurin:21-jre-alpine

# OCI standard labels — useful for registries and audit trails
LABEL org.opencontainers.image.title="app" \
    org.opencontainers.image.description="Production Java service" \
    org.opencontainers.image.source="https://github.com/your-org/your-repo"

# Create a non-root system user/group
# -S = system account (no password, no home dir login)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy layers in ascending order of change frequency
# dependencies/ rarely changes  → Docker caches this layer aggressively
# application/  changes every build → always rebuilt, but it's tiny (~500KB)
COPY --from=extract /extract/dependencies/          ./
COPY --from=extract /extract/spring-boot-loader/    ./
COPY --from=extract /extract/snapshot-dependencies/ ./
COPY --from=extract /extract/application/           ./

# Lock down file ownership before dropping privileges
RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 8080

# Active health probe — Kubernetes/Docker Swarm uses this for routing
# Requires spring-boot-starter-actuator in your pom.xml
HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=3 \
    CMD wget -qO- http://localhost:8080/actuator/health || exit 1

# ENTRYPOINT = locked runtime (can't be accidentally overridden)
# CMD = overridable app arguments
ENTRYPOINT ["java", \
    # Container-aware heap: use 75% of container memory as max heap
    "-XX:MaxRAMPercentage=75.0", \
    # Kill immediately on OOM instead of thrashing with GC
    "-XX:+ExitOnOutOfMemoryError", \
    # Faster startup for Tomcat's SecureRandom — common Dockerised Java gotcha
    "-Djava.security.egd=file:/dev/./urandom", \
    # Layered JAR entrypoint (replaces the flat jar's Main-Class)
    "org.springframework.boot.loader.JarLauncher"]

CMD []