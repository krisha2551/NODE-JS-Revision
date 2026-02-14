// 📦 Core Modules in Node.js

// Core modules are built-in modules
// that come with Node.js by default.
// No installation is required to use them.

// They provide basic features
// like file handling, server creation,
// and system information.

// 🔹 Common Core Modules:
// fs    → File system operations
// http  → Create web servers
// path  → Handle file paths
// os    → Get system details


// 🔧 Example: fs (File System) Module

const fs = require("fs");

// Write data to a file
fs.writeFileSync("example.txt", "Hello from Core Module");

// Read data from a file
const data = fs.readFileSync("example.txt", "utf-8");
console.log(data);


// ✅ Why use Core Modules?
// Fast and reliable
// No extra installation
// Maintained by Node.js itself
