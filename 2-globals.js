// GLOBAL - NO WINDOW!

// __dirname   - patch to current directory
// __filename  - file name
// require     - function to use modules (CommonJs)
// module      - info about current module (file)'
// process     - info about env where the program is being executed

console.log(__dirname);
setInterval(() => {
  console.log("hello world");
}, 1000);