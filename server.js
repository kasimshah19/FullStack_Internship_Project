const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const session = require("express-session");

console.log("SERVER FILE LOADED");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// ✅ Session Setup
app.use(session({
    secret: process.env.SESSION_SECRET || "studentapp123",
    resave: false,
    saveUninitialized: false
}));

// ✅ MongoDB Connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log("MongoDB Error:", err));

// ✅ User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ["admin", "staff"], default: "staff" }
});
const User = mongoose.model("User", userSchema);

// ✅ Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    dob: String
});
const Student = mongoose.model("Student", studentSchema);

// ✅ Middleware — Login Check
function isLoggedIn(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }
}

// ✅ Middleware — Admin Only Check
function isAdmin(req, res, next) {
    if (req.session.user && req.session.user.role === "admin") {
        next();
    } else {
        res.status(403).send("⛔ Access Denied — Admins only. <a href='/'>Go Back</a>");
    }
}

// ✅ Home Route — Protected
app.get("/", isLoggedIn, async (req, res) => {
    const students = await Student.find();
    res.render("index", {
        students,
        error: null,
        totalStudents: students.length,
        user: req.session.user
    });
});

// ✅ Signup Page
app.get("/signup", (req, res) => {
    res.render("signup", { error: null });
});

app.post("/signup", async (req, res) => {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.render("signup", { error: "Email already registered!" });
    }

    const allowedRoles = ["admin", "staff"];
    const finalRole = allowedRoles.includes(role) ? role : "staff";

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword, role: finalRole });
    res.redirect("/login");
});

// ✅ Login Page
app.get("/login", (req, res) => {
    res.render("login", { error: null });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.render("login", { error: "Email not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.render("login", { error: "Wrong password!" });
    }

    req.session.user = { name: user.name, email: user.email, role: user.role };
    res.redirect("/");
});

// ✅ Logout
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/login");
});

// ✅ Add Student
app.post("/addStudent", isLoggedIn, isAdmin, async (req, res) => {
    const { name, email, mobile, dob } = req.body;
    const students = await Student.find();

    if (!name || name.trim() === "") {
        return res.render("index", { students, error: "Name is required", totalStudents: students.length, user: req.session.user });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.render("index", { students, error: "Invalid Email Address", totalStudents: students.length, user: req.session.user });
    }

    if (!mobile || !/^\d{10}$/.test(mobile)) {
        return res.render("index", { students, error: "Mobile number must be exactly 10 digits", totalStudents: students.length, user: req.session.user });
    }

    if (!dob || dob.trim() === "") {
        return res.render("index", { students, error: "Date of birth is required", totalStudents: students.length, user: req.session.user });
    }

    // ✅ Toast - Added
    await Student.create({ name, email, mobile, dob });
    res.redirect("/?success=added");
});

// ✅ Delete Student
app.post("/deleteStudent", isLoggedIn, isAdmin, async (req, res) => {
    await Student.findByIdAndDelete(req.body.id);
    // ✅ Toast - Deleted
    res.redirect("/?success=deleted");
});

// ✅ Export to CSV
app.get("/exportCSV", isLoggedIn, async (req, res) => {
    const students = await Student.find();

    let csv = "Name,Email,Mobile,DOB\n";
    students.forEach(student => {
        csv += `${student.name},${student.email},${student.mobile},${student.dob || ""}\n`;
    });

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=students.csv");
    res.send(csv);
});

// ✅ Edit Form
app.get("/editStudent/:id", isLoggedIn, isAdmin, async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.render("edit", { student, error: null });
});

// ✅ Update Student
app.post("/updateStudent/:id", isLoggedIn, isAdmin, async (req, res) => {
    const { name, email, mobile, dob } = req.body;

    if (!name || name.trim() === "") {
        const student = await Student.findById(req.params.id);
        return res.render("edit", { student, error: "Name is required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        const student = await Student.findById(req.params.id);
        return res.render("edit", { student, error: "Invalid Email" });
    }

    if (!mobile || !/^\d{10}$/.test(mobile)) {
        const student = await Student.findById(req.params.id);
        return res.render("edit", { student, error: "Mobile must be 10 digits" });
    }

    if (!dob || dob.trim() === "") {
        const student = await Student.findById(req.params.id);
        return res.render("edit", { student, error: "Date of birth is required" });
    }

    // ✅ Toast - Updated
    await Student.findByIdAndUpdate(req.params.id, { name, email, mobile, dob });
    res.redirect("/?success=updated");
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});
