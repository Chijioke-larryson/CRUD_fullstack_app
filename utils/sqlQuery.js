
export const createRoleQuery = `
DO $$ BEGIN
    CREATE TYPE role_type AS ENUM('Manager', 'Developer', 'HR', 'Sales', 'Intern');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;
`;

export const createEmployeeTableQuery = `
CREATE TABLE employee_details(
    id SERIAL PRIMARY KEY ,
    name VARCHAR(50)NOT NULL ,
    email VARCHAR(50) NOT NULL  UNIQUE ,
    role role_type NOT NULL DEFAULT 'Intern',
    age SMALLINT NOT NULL CHECK ( age > 18 ),
    salary DECIMAL(8,2 )NOT NULL 
                            
                        
    
)`

export const getAllEmployeeQuery = `
SELECT  * FROM employee_details ;
`

export const createEmployeeQuery = `
INSERT INTO employee_details(name, email, role, age, salary)
VALUES($1, $2,  COALESCE($3:: role_type, 'Intern':: role_type), $4,  $5)   RETURNING * 
`
 export const getEmployeeQuery = `
 SELECT * FROM employee_details WHERE id = $1
 
 `;


 export const deleteEmployeeQuery = `
 DELETE FROM employee_details WHERE id = $1
 
 
 `

export const updateEmployeeQuery = `
     UPDATE employee_details 
     SET 
     name = COALESCE($1, name),
      email = COALESCE($2, email),
      role =  COALESCE($3:: role_type, role),
      age = COALESCE($4, age),
      salary  = COALESCE($5, salary)
     WHERE id = $6
     RETURNING *
     



`

