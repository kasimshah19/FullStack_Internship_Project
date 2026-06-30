<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>


# 🎓 Student Management System

A modern Student Management System developed using **Node.js**, **Express.js**, **EJS**, **Bootstrap** and **JavaScript**.

This project was developed during my **Full Stack Development Internship**.

---

- Table of Contents

Features
Technologies Used
Project Structure
Installation
Screenshots
Live Demo
Future Improvements
Author

- Features

- Core Functionality

Student Registration with Name, Email, Mobile and Date of Birth
Server-side validation for Name, Email and Mobile
Edit and update student records
Delete student records, with a confirmation dialog
Search students by Name, Email or Mobile
Export the student list to CSV
Print the student list


- Authentication
- Signup with hashed passwords using bcrypt
Login with session-based authentication
Protected routes, so only logged-in users can access the dashboard
- Logout functionality
Show and hide password toggle on the Login and Signup forms


- Database

MongoDB Atlas cloud database integration via Mongoose
Persistent storage, so records are not lost on server restart


- UI and UX

Fully responsive Bootstrap 5 UI
Dashboard summary cards for Total Students, Active Records and Last Updated
Toast notifications for Add, Update and Delete actions
Confirmation dialog before deleting a student
Serial number column in the student table
Pagination with adjustable rows per page
Dark and Light mode toggle, with the preference saved in the browser
Professional footer
Clean, modern interface

---

# 🛠 Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- Node.js
- Express.js
- EJS

---

# 📂 Project Structure

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

---

# ⚙ Installation

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
```

---

## 📸 Project Screenshots

### 🏠 Home Page

![Home](assets/screenshots/home.png)

---

### ⚡ DOM Manipulation

![DOM](assets/screenshots/dom.png)

![DOM 2](assets/screenshots/dom2.png)

---

### 🌐 API Integration

![API](assets/screenshots/api.png)

![API 2](assets/screenshots/api2.png)

## 🚀 Live Demo
[Click here to view live](https://fullstack-internship-project-621z.onrender.com)

---

# 🎯 Future Improvements

- OTP-based email or mobile verification during signup
- Role-based access for Admin and Student
- Forgot Password and Reset Password flow
- Profile photo upload for students
- Admin analytics dashboard with charts
- Class or Batch grouping for students
- Bulk import of students via CSV or Excel
- Unit and integration testing

---

# 👨‍💻 Author

Kasim Shah

GitHub

https://github.com/kasimshah19

---

# ⭐ If you like this project

Give this repository a ⭐ on GitHub. 
