# Docker Storage

## Level 5

```Plain text
container writable layer
volume
bind mount
tmpfs
```

### Challenge

Run PostgreSQL in Docker.

Insert:

```Plain text
users
products
orders
```

- Delete the PostgreSQL container.
- Create a new PostgreSQL container.
- Your data should still exist.
- If you can do this confidently, you've understood Docker persistence.

### Step 1: Run PostgreSQL with a Volume

```bash
docker run -d --name postgres --network mynetwork -e POSTGRES_USER=krish -e POSTGRES_PASSWORD=secret123 -e POSTGRES_DB=mydb -v pgdata:/var/lib/postgresql/data postgres:17
```

### Step 2: Insert Sample Data

```bash
docker exec -it postgres psql -U krish -d mydb
```

```sql
CREATE TABLE users(id SERIAL PRIMARY KEY, name TEXT);
CREATE TABLE products(id SERIAL PRIMARY KEY, name TEXT);
CREATE TABLE orders(id SERIAL PRIMARY KEY, product_id INT, user_id INT);

INSERT INTO users(name) VALUES ('Krish');
INSERT INTO products(name) VALUES ('Laptop');
INSERT INTO orders(product_id, user_id) VALUES (1, 1);
```

### Step 3: Delete Container

```bash
docker rm -f postgres
```

### Step 4: Recreate Container

```bash
docker run -d --name postgres --network mynetwork -e POSTGRES_USER=krish -e POSTGRES_PASSWORD=secret123 -e POSTGRES_DB=mydb -v pgdata:/var/lib/postgresql/data postgres:17
```

### Step 5: Verify Data

```bash
docker exec -it postgres psql -U krish -d mydb
```

```sql
SELECT * FROM users;
SELECT * FROM products;
SELECT * FROM orders;
```
