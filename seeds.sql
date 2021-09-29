USE employee_db; 
INSERT INTO dept (name)
VALUES ("test1");

INSERT INTO role (title, salary,department_id)
VALUES ("test2", 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("satpal", "matharoo", 1, null);