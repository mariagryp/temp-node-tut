const http = require("http");

// req = incoming request, res = response
/* a client is requesting from the web browser your webpage */
/* you'll have info about the method and all kinds usefull stuff in that request object */
//res = response - is what we sending back
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my page!");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our short history!");
    return;
  }
  res.end(`
  <h1>oops!</h1>
  <p>We can't seem to find the page you are looking for!</p>
  <a href="/">back home</a>`);
});

server.listen(5000);
