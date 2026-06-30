<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>
<h1 align="center">Student Management System</h1>
<p align="center">
A modern, full-stack Student Management System built with Node.js, Express.js, EJS, MongoDB, Bootstrap and JavaScript.
</p>
<p align="center">
Developed during my Full Stack Development Internship and later extended into a complete, production-style CRUD application with authentication, a persistent database, and several professional UI/UX enhancements.
</p>
<p align="center">
  <a href="https://fullstack-internship-project-621z.onrender.com">Live Demo</a>
</p>
<br>
Table of Contents


Features
Technologies Used
Project Structure
Installation
Screenshots
Live Demo
Future Improvements
Author


<br>
Features

Core Functionality


Student Registration with Name, Email, Mobile and Date of Birth
Server-side validation for Name, Email and Mobile
Edit and update student records
Delete student records, with a confirmation dialog
Search students by Name, Email or Mobile
Export the student list to CSV
Print the student list


Authentication


Signup with hashed passwords using bcrypt
Login with session-based authentication
Protected routes, so only logged-in users can access the dashboard
Logout functionality
Show and hide password toggle on the Login and Signup forms


Database


MongoDB Atlas cloud database integration via Mongoose
Persistent storage, so records are not lost on server restart


UI and UX


Fully responsive Bootstrap 5 UI
Dashboard summary cards for Total Students, Active Records and Last Updated
Toast notifications for Add, Update and Delete actions
Confirmation dialog before deleting a student
Serial number column in the student table
Pagination with adjustable rows per page
Dark and Light mode toggle, with the preference saved in the browser
Professional footer
Clean, modern interface


<br>
Technologies Used

FrontendBackendDatabaseToolsHTML5Node.jsMongoDB AtlasbcryptjsCSS3Express.jsMongooseexpress-sessionBootstrap 5EJS Template EngineGit and GitHubJavaScriptRender (Deployment)

<br>
Project Structure

FullStack_Internship_Project
├── server.js
├── package.json
├── package-lock.json
├── views
│   ├── login.ejs
│   ├── signup.ejs
│   ├── index.ejs
│   └── edit.ejs
├── public
└── README.md

<br>
Installation

Clone the repository.

bashgit clone https://github.com/kasimshah19/FullStack_Internship_Project.git

Move into the project folder.

bashcd FullStack_Internship_Project

Install dependencies.

bashnpm install

Create a .env file, or set environment variables, with the following.

MONGO_URI=your_mongodb_atlas_connection_string
SESSION_SECRET=your_session_secret

Run the project.

bashnode server.js

The app will be available at http://localhost:3000.

<br>
Project Screenshots

Login and Signup

Show Image

Dashboard

Show Image

Student Management

Show Image

Show Image

API Integration

Show Image

Show Image

<br>
Live Demo

Click here to view the live project

The app is hosted on Render's free tier, so the first request after a period of inactivity may take 30 to 50 seconds to respond while the server spins back up.

<br>
Future Improvements


OTP-based email or mobile verification during signup
Role-based access for Admin and Student
Forgot Password and Reset Password flow
Profile photo upload for students
Admin analytics dashboard with charts
Class or Batch grouping for students
Bulk import of students via CSV or Excel
Unit and integration testing


<br>
Author

Kasim Shah

B.Tech Computer Engineering

GitHub Profile

<br>
<p align="center">If you like this project, give this repository a star on GitHub.</p>