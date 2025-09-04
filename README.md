Student & Course CRUD API

Project Overview
This project is a Node.js REST API built with Express.js and MySQL that shows CRUD (Create, Read, Update, Delete) operations for two resources:  
- Students
- Courses  

It was created as a laboratory exercise to practice database integration, API development, and testing with Postman.  


Setup Steps
1. Clone the repository
  bash
   git clone https://github.com/alexandraamicics-cpu/lab-crud-api.git
   cd lab-crud-api

2. Install dependencies

   bash
   npm install

3. Configure environment variables

   Copy `.env.example` → `.env`
   Fill in your actual MySQL credentials:

     env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=yourpassword
     DB_NAME=lab_crud
     PORT=3000
    

4. Create database and tables (inside MySQL or phpMyAdmin):

   sql
   CREATE DATABASE lab_crud;

   USE lab_crud;

   CREATE TABLE students (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100) NOT NULL,
     email VARCHAR(100) UNIQUE NOT NULL,
     course VARCHAR(100),
     year_level INT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   CREATE TABLE courses (
     id INT AUTO_INCREMENT PRIMARY KEY,
     code VARCHAR(20) UNIQUE NOT NULL,
     title VARCHAR(100) NOT NULL,
     units INT NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   
 ▶️How to Run

Start the server in normal mode:

  bash
  npm start
  
Start the server in development mode (with auto-reload):

  bash
  npm run dev
  
The server runs at:
 [http://localhost:3000](http://localhost:3000)



▶️API Endpoints

Health Check

 GET /api/health

Students

POST /api/students → Create student
GET /api/students → Get all students
GET /api/students/:id → Get student by ID
PUT /api/students/:id → Update student by ID
DELETE /api/students/:id → Delete student by ID

Courses

POST /api/courses → Create course
GET /api/courses → Get all courses
GET /api/courses/:id → Get course by ID
PUT /api/courses/:id → Update course by ID
DELETE /api/courses/:id → Delete course by ID


Conclusion

Working on this CRUD API helped me understand how Epress.js and MySQL work together. I faced errors such as Cannot GET routes, body parsing issues, and database connection problems, but debugging taught me the importance of checking both Postman requests and backend code structure carefully. I also learned how to manage environment variables securely using .env. Overall, this project gave me hands-on experience with building, testing, and improving a real-world API.
