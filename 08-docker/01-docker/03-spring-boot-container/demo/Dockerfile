FROM eclipse-temurin:21-jdk

WORKDIR /home/app

COPY /target/app.jar .

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
