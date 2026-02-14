// 📦 Third-Party Modules in Node.js

// Third-party modules are external libraries.
// They are created by other developers.
// These modules must be installed using npm.

// They help speed up development
// by providing ready-made features.

// 🔹 Popular Third-Party Modules:
// express   → Web framework
// mongoose  → MongoDB ODM
// nodemon   → Auto server restart
// dotenv    → Environment variables


// 🔧 Example: express Module

// Step 1: Install
// npm install express

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Third-Party Module");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


// ✅ Why use Third-Party Modules?
// Saves time
// Used in real projects
// Large community support
