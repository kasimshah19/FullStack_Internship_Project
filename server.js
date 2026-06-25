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
  console.log("POST ROUTE HIT");
    console.log("REQ BODY =", req.body);

    const { name, email, mobile } = req.body;

    // Name Validation
    if (!name || name.trim() === "") {
        return res.render("index", {
            students,
            error: "Name is required"
        });
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.render("index", {
            students,
            error: "Invalid Email Address"
        });
    }

    // Mobile Validation
    const mobileRegex = /^[0-9]{10}$/;

   if (!mobile || mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
    return res.render("index", {
        students,
        error: "Mobile number must be exactly 10 digits"
    });
}

 console.log(req.body);
 console.log("Mobile:", mobile);

students.push({
    name: name,
    email: email,
    mobile: mobile
});

console.log(students);

// console.log("STUDENTS =", students);
// console.log("REQ BODY =", req.body);
// console.log("STUDENTS =", students);

res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});