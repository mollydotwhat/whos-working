DROP DATABASE IF EXISTS people_tracker_db;
CREATE DATABASE people_tracker_db;

-- tables needed: 

--     department (id: INT PRIMARY KEY, name: VARCHAR(30) to hold department name), 
--    role (id: INT PRIMARY KEY, title: VARCHAR(30), salary: DECIMAL, department_id: INT), 
--    employee (id: INT PRIMARY KEY, first_name: VARCHAR(30), last_name: VARCHAR(30), role_id: INT, manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager))