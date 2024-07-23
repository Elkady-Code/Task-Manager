# Task-Manager Backend

## Overview
This repository contains a Task Manager API built using Node.js and Express. The API provides endpoints for user authentication and accessing a dashboard with protected routes. It is designed to be efficient and secure, leveraging JSON Web Tokens (JWT) for user authentication.

## Features
- User Registration: Register new users by providing a username and password.
- User Login: Authenticate users and provide them with a JSON Web Token (JWT) for accessing protected routes.
- Dashboard Access: Retrieve user-specific information from a protected dashboard endpoint.
- JWT Authentication: Securely authenticate and authorize users using JWT.

## Technologies Used
- Node.js: JavaScript runtime for server-side development.
- Express: Fast, unopinionated, minimalist web framework for Node.js.
- JWT: JSON Web Tokens for securing user authentication.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/Elkady-Code/Task-Manager-Backend
    ```
2. Navigate to the project directory:
    ```sh
    cd task-manager-backend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Set up environment variables (create a `.env` file in the root directory):
    ```env
    PORT=3000
    JWT_SECRET=your_jwt_secret
    ```
5. Start the server:
    ```sh
    npm start
    ```

## Usage
After starting the server, you can use tools like Postman or cURL to interact with the API endpoints.

- User Authentication:
  - `POST /api/v1/login`: Log in a user and receive a JWT.
- Dashboard:
  - `GET /api/v1/dashboard`: Retrieve user-specific information (protected route).

## API Endpoints

### User Authentication
- **POST /api/v1/login**
  - Request: `{ "username": "your_username", "password": "your_password" }`
  - Response: `{ "msg": "User Created", "token": "your_jwt_token" }`

### Dashboard
- **GET /api/v1/dashboard**
  - Headers: `{ "Authorization": "Bearer your_jwt_token" }`
  - Response: `{ "msg": "Hello, username", "secret": "Here is your authorized data your lucky number is X" }`

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License.
