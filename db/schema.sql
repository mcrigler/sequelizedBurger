-- Create database 
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create table
CREATE TABLE IF NOT EXISTS  burgers
(
	id int(10) NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	dt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);


# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS sqburgers;

# Create the burgers table
CREATE TABLE sqburgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);