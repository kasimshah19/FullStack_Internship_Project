const express = require("express");
console.log("SERVER FILE LOADED");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let students = [];

// ✅ Updated - Total Students count bhi bheja
app.get("/", (req, res) => {
    res.render("index", {
        students,
        error: null,
        totalStudents: students.length
    });
});

app.post("/addStudent", (req, res) => {
    const { name, email, mobile } = req.body;

    if (!name || name.trim() === "") {
        return res.render("index", { students, error: "Name is required", totalStudents: students.length });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.render("index", { students, error: "Invalid Email Address", totalStudents: students.length });
    }

    if (!mobile || !/^\d{10}$/.test(mobile)) {
        return res.render("index", { students, error: "Mobile number must be exactly 10 digits", totalStudents: students.length });
    }

    students.push({ name, email, mobile });
    res.redirect("/");
});

// ✅ Delete Route
app.post("/deleteStudent", (req, res) => {
    const index = req.body.index;
    students.splice(index, 1);
    res.redirect("/");
});

// ✅ Edit form dikhao
app.get("/editStudent/:index", (req, res) => {
    const index = req.params.index;
    const student = students[index];
    res.render("edit", { student, index });
});

// ✅ Edit form submit karo
app.post("/updateStudent/:index", (req, res) => {
    const index = req.params.index;
    const { name, email, mobile } = req.body;

    if (!name || name.trim() === "") {
        return res.render("edit", { student: req.body, index, error: "Name is required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.render("edit", { student: req.body, index, error: "Invalid Email" });
    }

    if (!mobile || !/^\d{10}$/.test(mobile)) {
        return res.render("edit", { student: req.body, index, error: "Mobile must be 10 digits" });
    }

    students[index] = { name, email, mobile };
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});