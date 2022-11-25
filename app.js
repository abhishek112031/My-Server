//creating server through node-js

const http = require("http");//importing http module globally

// function rqListeners(request,response){

// }

// http.createServer(rqListeners);

// or we can use anonymous function:

// http.createServer(function(req,res){

// })



// or we can use fat arrow function:
//this createServer method actually returns a server,so we have to store it in a new variable
const myFirstServer=http.createServer((req,res)=>{
    console.log("Abhishek");
});

myFirstServer.listen(4000); //keep on running
//port number
// A port number is a way to identify a specific process to which an internet or other network message is to be forwarded when it arrives at a server. 
