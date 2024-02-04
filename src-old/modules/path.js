const path = require("path")

// Basename
console.log(path.basename(__filename))

// Dirname
console.log(path.basename(__dirname))

// File extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename));

//Join files path
console.log(path.join(__dirname, 'Teste', "file.ts"));
