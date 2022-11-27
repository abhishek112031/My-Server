//import module:
const http = require("http");

//importing fron local file:
const routes=require('./routes')
console.log(routes.someText);


//creating server:--->
const myServer = http.createServer(routes.handeler);
myServer.listen(3000);
