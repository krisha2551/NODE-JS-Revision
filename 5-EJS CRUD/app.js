// 🌿 EJS CRUD (Create, Read, Update, Delete) in Node.js

// - EJS CRUD means building a Create, Read, Update, Delete application using:

// - Node.js
// - Express.js
// - EJS


// 📌 What is EJS?

// EJS = Embedded JavaScript

// It helps you:

// - Send data from backend to frontend

// - Write JavaScript inside HTML

// - Show dynamic data on browser

// Example:

// <h1><%= title %></h1>


// - Install Packages

// npm init -y

// npm install express ejs



import express from "express";


const app = express();

app.set("view engine","ejs");

app.use(express.json());

let studentList = [
    {
        id:1,
        name:Krisha
    },
    {
        id:2,
        name:Heli
    }
    {
        id:3,
        name:Preksha
    }
];


app.get("/", (req, res) => {
  res.render("index", { studentList });
});


app.get("/add", (req, res) => {
  res.render("add");
});


// Add page

app.post("/add", (req, res) => {
  const { name } = req.body;

  studentList.push({
    id: Date.now(),
    name,
  });

  res.redirect("/");
});


// Edit page

app.get("/edit/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = studentList.find((s) => s.id === id);

  if (!student) return res.status(404).send("Student not found");

  res.render("edit", { student });
});






const port = 5000;

app.listen(port, () => {
   console.log("server running on ", port);
});