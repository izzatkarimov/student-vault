# Student Vault

![Screenshot 2024-12-10 at 6 05 06 AM](https://github.com/user-attachments/assets/316b2b65-09ef-412f-b653-3c4fced28048)

A RESTful API for managing students and departments in a student management system.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/student-vault.git
   ```

2. Ensure you have [Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) and [Maven](https://maven.apache.org/download.cgi) installed.

3. Set up your MySQL database:
    - Create a database named `student_vault_db`.
    - Update the `src/main/resources/application.properties` file with your database credentials.

4. Build the project:
   ```
   ./mvnw clean install
   ```

5. Run the application:
   ```
   ./mvnw spring-boot:run
   ```

## Usage

Once the application is running, you can interact with the API using tools like Postman or curl.

### API Endpoints

- **Students**
    - **Create Student**
        - `POST /api/students`
        - Request Body:
          ```json
          {
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com",
            "departmentId": 1
          }
          ```

    - **Get Student by ID**
        - `GET /api/students/{id}`

    - **Get All Students**
        - `GET /api/students`

    - **Update Student**
        - `PUT /api/students/{id}`
        - Request Body:
          ```json
          {
            "firstName": "Jane",
            "lastName": "Doe",
            "email": "jane.doe@example.com",
            "departmentId": 1
          }
          ```

    - **Delete Student**
        - `DELETE /api/students/{id}`

- **Departments**
    - **Create Department**
        - `POST /api/departments`
        - Request Body:
          ```json
          {
            "departmentName": "Computer Science",
            "departmentDescription": "Department for Computer Science"
          }
          ```

    - **Get Department by ID**
        - `GET /api/departments/{id}`

    - **Get All Departments**
        - `GET /api/departments`

    - **Update Department**
        - `PUT /api/departments/{id}`
        - Request Body:
          ```json
          {
            "departmentName": "Information Technology",
            "departmentDescription": "Department for Information Technology"
          }
          ```

    - **Delete Department**
        - `DELETE /api/departments/{id}`