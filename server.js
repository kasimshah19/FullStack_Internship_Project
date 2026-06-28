const express = require("express");
console.log("SERVER FILE LOADED");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let students = [];

app.get("/", (req, res) => {
    res.render("index", {
        students,
        error: null
    });
});

app.post("/addStudent", (req, res) => {
    const { name, email, mobile } = req.body;

    if (!name || name.trim() === "") {
        return res.render("index", { students, error: "Name is required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.render("index", { students, error: "Invalid Email Address" });
    }

    if (!mobile || !/^\d{10}$/.test(mobile)) {
        return res.render("index", { students, error: "Mobile number must be exactly 10 digits" });
    }

    students.push({ name, email, mobile });
    res.redirect("/");
});

// ✅ NAYA - Delete Route
app.post("/deleteStudent", (req, res) => {
    const index = req.body.index;
    students.splice(index, 1);
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});