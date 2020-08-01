DROP DATABASE IF EXISTS burgers_db; 

CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE burger (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255), 
    devoured BOOL DEFAULT FALSE,
    PRIMARY KET (ID) 
);



