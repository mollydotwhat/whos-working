DROP DATABASE IF EXISTS people_tracker_db;
CREATE DATABASE people_tracker_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    departmant_name VARCHAR(30)
);
-- tables needed: 

--     department (id: INT PRIMARY KEY, name: VARCHAR(30) to hold department name), 

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    FOREIGN KEY (department_id)
        REFERENCES department(id)
);
--    role (id: INT PRIMARY KEY, title: VARCHAR(30), salary: DECIMAL, department_id: INT), 

--    employee (id: INT PRIMARY KEY, first_name: VARCHAR(30), last_name: VARCHAR(30), role_id: INT, manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager))

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id)
        REFERENCES role(id),
    manager_id INT,
    -- i know recursive foreign keys are a thing; i just have to figure out HOW
);