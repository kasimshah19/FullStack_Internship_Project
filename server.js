const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

console.log("SERVER FILE LOADED");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// ✅ MongoDB Connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log("MongoDB Error:", err));

// ✅ Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String
});

const Student = mongoose.model("Student", studentSchema);

// ✅ Home Route
app.get("/", async (req, res) => {
    const students = await Student.find();
    res.render("index", {
        students,
        error: null,
        totalStudents: students.length
    });
});

// ✅ Add Student
app.post("/addStudent", async (req, res) => {
    const { name, email, mobile } = req.body;
    const students = await Student.find();

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

    await Student.create({ name, email, mobile });
    res.redirect("/");
});

// ✅ Delete Student
app.post("/deleteStudent", async (req, res) => {
    await Student.findByIdAndDelete(req.body.id);
    res.redirect("/");
});

// ✅ Export to CSV
app.get("/exportCSV", async (req, res) => {
    const students = await Student.find();

    let csv = "Name,Email,Mobile\n";

    students.forEach(student => {
        csv += `${student.name},${student.email},${student.mobile}\n`;
    });

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=students.csv");
    res.send(csv);
});

// ✅ Edit Form
app.get("/editStudent/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.render("edit", { student, error: null });
});

// ✅ Update Student
app.post("/updateStudent/:id", async (req, res) => {
    const { name, email, mobile } = req.body;

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

    await Student.findByIdAndUpdate(req.params.id, { name, email, mobile });
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});