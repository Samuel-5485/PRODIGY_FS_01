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
  - CSS (for styling)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JWT for authentication
  - bcrypt for password hashing
 
    
## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone  https://github.com/Samuel-5485/PRODIGY_FS_01.git

##Usage
Once the application is running, you can:

  -Register as a new user.
  -Log in to receive a JWT token.
  -Access protected routes based on your role.
  -If you are successfully login you see your email in the dashboard.


That's great! You can describe your project in the README.md file to provide an overview of its features and functionalities. Here's an example of how you might write the README.md for your secure user authentication project using a full-stack approach:

markdown
Copy code
# Secure User Authentication System

This project is a full-stack application designed to provide secure user authentication using modern web technologies. It includes features such as user registration, login, JWT-based authentication, and role-based access control.

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Project Description

This project implements a secure user authentication system that allows users to register, log in, and access protected routes based on their roles. The system uses JSON Web Tokens (JWT) for authentication and provides a robust backend built with Node.js and Express, a MongoDB database for data storage, and a React.js frontend for the user interface.

## Features

- **User Registration:** Users can create an account by providing their name, email, password, and role.
- **User Login:** Users can log in using their email and password to receive a JWT token.
- **JWT Authentication:** Secure access to protected routes with JWT-based authentication.
- **Role-Based Access Control:** Different users have different levels of access based on their role (e.g., admin, user).
- **Secure Password Storage:** Passwords are securely hashed before storing them in the database.

## Technologies Used

- **Frontend:**
  - React.js
  - CSS (for styling)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JWT for authentication
  - bcrypt for password hashing

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/secure-authentication.git
   
## Usage
Once the application is running, you can:
 -Register as a new user.
 -Log in to receive a JWT token.
 -Access protected routes based on your role.
 -If you successfully login you see your information in the dashboard
 
## API Endpoints
Authentication Routes
POST /auth/login - Login and receive a JWT token
User Routes (Protected)
GET /api/users - Get the authenticated user's profile
POST /auth/refresh-token - Update user details  
