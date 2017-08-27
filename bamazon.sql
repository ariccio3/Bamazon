DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(50) not null,
    department_name VARCHAR(50) null,
    price decimal (10,2) null,
    stock_quantity int(4) null,
    PRIMARY KEY(id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Bo Jackson Rookie Card", "Toys", 5.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Catnip", "Pets", 5.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Lazor Light Pen", "Pets", 17.00, 41);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Snapchat Spectacles", "Tech", 140.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("3D Printer", "Tech", 220.00, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Sillicon Valley Season 3", "Tech", 20.00, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Donald Trump Magic 8 Ball", "Novelty", 15.00, 66);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Remote Control Mouse", "Pets", 13.00, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Truck Tailgate Fake Balls", "Novelty", 12.00, 42);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Kitty Condo", "Pets", 78.00, 22);