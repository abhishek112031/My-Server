//import module:
const http = require("http");

//creating server:--->
const myServer = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html");


    if (req.url == "/home") {
        res.write("<html>");
        res.write("<head><title>my first practice</title></head>");
        res.write("<body><h1>Welcome home<h1></body>");
        res.write("</html>");



    }
    else if (req.url == "/about") {
        res.write("<html>");
        res.write("<head><title>my first practice</title></head>");
        res.write("<body><h1>Welcome to About Us page<h1></body>");
        res.write("</html>");



    }
    else if (req.url == "/node") {
        res.write("<html>");
        res.write("<head><title>my first practice</title></head>");
        res.write("<body><h1>Welcome to my Node Js project<h1></body>");
        res.write("</html>");



    }
    else if(req.url == "/") {
        res.write("<html>");
        res.write("<head><title>my first practice</title></head>");
        res.write("<body><h1>Hi I am Abhishek</h1></body>");
        res.write("</html>");

    }
    else{
        res.write("<html>");
        res.write("<head><title>my first practice</title></head>");
        res.write("<body><h1>sorry can't find anything,please check url!</h1></body>");
        res.write("</html>");

    }

    res.end();


});
myServer.listen(3000);
