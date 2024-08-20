  # Secure User Authentication System 
  
  This project is a full-stack application designed to provide secure user authentication 
  using modern web technologies. It includes features such as user registration,
  login, JWT-based authentication, and role-based access control.
             
## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)
- [Acknowledgements]
  ## Project Description

This project implements a secure user authentication system that allows users to register, 
log in, and access protected routes based on their roles. The system uses JSON Web Tokens (JWT)
for authentication and provides a robust backend built with Node.js and Express, a MongoDB database 
for data storage, and a React.js frontend for the user interface.

## Features

- **User Registration:** Users can create an account by providing their name, email, password, and role.
- **User Login:** Users can log in using their email and password to receive a JWT token.
- **JWT Authentication:** Secure access to protected routes with JWT-based authentication.
- **Role-Based Access Control:** Different users have different levels of access based on their role (e.g., admin, user).
- **Secure Password Storage:** Passwords are securely hashed before storing them in the database.

  ## Technologies Used

- **Frontend:**
  - React.js
  - React bootsrap
  - CSS (for styling)
  - react-dom
  - react-router-dom
  - react-scripts
  - web-vitals

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JWT for authentication
  - bcrypt for password hashing
  - cors for a security feature implemented by web browsers that controls how resources (like APIs) 
    
## Installation and Setup

To run this project locally, follow these steps:
1. **Clone the repository:**
   ```bash
   git clone  https://github.com/Samuel-5485/PRODIGY_FS_01.git

Navigate the project directory:

cd PRODIGY
install server dependencies:
cd JWt-node
npm install
*start the backend server*
 node App.js

install client dependencies:
npm install
cd jwt-react
npm install
*start the frontend server*
 npm start

database server dependecies:
install mongoDB for the project datastore 
  https://www.mongodb.com/try/download/community
    tools: mongoDB Shell
           mongoDB Compass(GUI)
         
install Postman for the calling of API

##Usage
Once the application is running, you can:

  -Register as a new user.
  -Log in to receive a JWT token.
  -Access protected routes based on your role.
  -If you are successfully login you see your email in the dashboard.

  ## API Endpoints
Authentication Routes
POST /auth/login - Login and receive a JWT token
User Routes (Protected)
GET /api/users - Get the authenticated user's profile
POST /auth/refresh-token - Update user details  

## Acknowledgements

- [Express.js](https://expressjs.com/) - Web framework used
- [Mongoose](https://mongoosejs.com/) - MongoDB ORM
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - Used for JWT authentication
- Special thanks to [Prodigy Infotech](https://prodigyinfotech.dev) for the opportunity to work on this project.

 ## Contact

Created by [Samuel Diriba]
       (https://www.linkedin.com/in/samuel-diriba-516b4b296/)
 
