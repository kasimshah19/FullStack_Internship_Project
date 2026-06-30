<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>
<h1 align="center">🎓 Student Management System</h1>
<p align="center">
A modern, full-stack Student Management System built with <b>Node.js</b>, <b>Express.js</b>, <b>EJS</b>, <b>MongoDB</b>, <b>Bootstrap</b> and <b>JavaScript</b>.
</p>
<p align="center">
Developed during my <b>Full Stack Development Internship</b> and later extended into a complete, production-style CRUD application with authentication, a persistent database, and several professional UI/UX enhancements.
</p>
<p align="center">
  <a href="https://fullstack-internship-project-621z.onrender.com"><b>🚀 Live Demo</b></a>
</p>
---
📚 Table of Contents
Features
Technologies Used
Project Structure
Installation
Screenshots
Live Demo
Future Improvements
Author
---
🚀 Features
Core Functionality
📝 Student Registration — Name, Email, Mobile, Date of Birth
✅ Server-side validation for Name, Email and Mobile
✏️ Edit / Update student records
🗑️ Delete student records (with confirmation dialog)
🔍 Search students by Name, Email or Mobile
📥 Export student list to CSV
🖨️ Print student list
Authentication
🔐 Signup with hashed passwords (bcrypt)
🔑 Login with session-based authentication
🛡️ Protected routes — only logged-in users can access the dashboard
🚪 Logout functionality
👁️ Show / Hide password toggle on Login & Signup forms
Database
☁️ MongoDB Atlas (cloud database) integration via Mongoose
💾 Persistent storage — records are no longer lost on server restart
UI / UX
📱 Fully responsive Bootstrap 5 UI
📊 Dashboard summary cards — Total Students, Active Records, Last Updated
🔔 Toast notifications for Add / Update / Delete actions
⚠️ Confirmation dialog before deleting a student
🔢 Serial number (S.No) column in the student table
📄 Pagination with adjustable rows-per-page
🌙 Dark / Light mode toggle (preference saved in browser)
🦶 Professional footer
✨ Clean, modern interface
---
🛠 Technologies Used
Frontend	Backend	Database	Tools
HTML5	Node.js	MongoDB Atlas	bcryptjs
CSS3	Express.js	Mongoose	express-session
Bootstrap 5	EJS (Template Engine)		Git & GitHub
JavaScript			Render (Deployment)
---
📂 Project Structure
```
FullStack_Internship_Project
│
├── server.js              # Main Express server, routes & schemas
├── package.json
├── package-lock.json
│
├── views
│   ├── login.ejs           # Login page
│   ├── signup.ejs          # Signup page
│   ├── index.ejs           # Dashboard / Student list
│   └── edit.ejs             # Edit student page
│
├── public                  # Static assets
│
└── README.md
```
---
⚙ Installation
1. Clone the repository
```bash
git clone https://github.com/kasimshah19/FullStack_Internship_Project.git
```
2. Move into the project folder
```bash
cd FullStack_Internship_Project
```
3. Install dependencies
```bash
npm install
```
4. Create a `.env` file (or set environment variables) with:
```
MONGO_URI=your_mongodb_atlas_connection_string
SESSION_SECRET=your_session_secret
```
5. Run the project
```bash
node server.js
```
The app will be available at `http://localhost:3000`
---
📸 Project Screenshots
🔐 Login & Signup
![Login](assets/screenshots/login.png)
🏠 Dashboard
![Home](assets/screenshots/home.png)
⚡ Student Management (Add / Edit / Delete)
![DOM](assets/screenshots/dom.png)
![DOM 2](assets/screenshots/dom2.png)
🌐 API Integration
![API](assets/screenshots/api.png)
![API 2](assets/screenshots/api2.png)
---
🚀 Live Demo
🔗 Click here to view the live project
> ⚠️ The app is hosted on Render's free tier, so the first request after a period of inactivity may take 30–50 seconds to respond while the server spins back up.
---
🎯 Future Improvements
📧 OTP-based email/mobile verification during signup
🛂 Role-based access (Admin / Student)
🔁 Forgot Password / Reset Password flow
🖼️ Profile photo upload for students
📈 Admin analytics dashboard with charts
🏫 Class / Batch grouping for students
📊 Bulk import students via CSV/Excel
🧪 Unit and integration testing
---
👨‍💻 Author
Kasim Shah
B.Tech Computer Engineering
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
---
<p align="center">⭐ If you like this project, give this repository a star on GitHub!</p>