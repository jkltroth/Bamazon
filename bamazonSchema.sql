DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apples", "Food & Grocery", 0.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cereal", "Food & Grocery", 2.99, 1500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pasta", "Food & Grocery", 1.49, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", "Electronics", 1099.99, 275);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 2299.99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shoes", "Clothing & Jewelry", 69.99, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Socks", "Clothing & Jewelry", 9.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothpaste", "Beauty & Health", 7.99, 2000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shampoo", "Beauty & Health", 3.98, 2500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tires", "Automotive", 249.49, 750);