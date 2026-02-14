// 📦 Local Modules in Node.js

// Local modules are user-created files.
// They help divide code into small parts.
// Each file performs a specific task.

// Local modules improve:
// Code structure
// Reusability
// Maintainability


// 🔧 Example: Creating a Local Module

// ➤ math.js
function add(a, b) {
  return a + b;
}

module.exports = add;


// ➤ app.js
const add = require("./math");
console.log(add(5, 3));


// ✅ Why use Local Modules?
// Clean code
// Easy debugging
// Reuse logic in many files
