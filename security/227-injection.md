# Injections

most common type of attack.

injections means injecting code into a another piece of code.

most common injection is SQL injection. for example

```
' or 1=1--
'; DROP TABLE users; --
```

above injected code will become

```sql
-- drops user table
INSERT INTO some_table (some_column) VALUES (''; DROP TABLE users; --);
```

## to prevent injection

- sanitize input - use blacklist or whitelist to clean the input
- parametrize questions - pre-compile and sql statements and only supply the parameters
- use a ORM

exercise: [SQL Injection](https://www.hacksplaining.com/exercises/sql-injection)
