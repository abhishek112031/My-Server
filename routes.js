const fs = require("fs");


const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;

    if (url == '/') {
        res.write("<html>");
        res.write("<head><title><h1>Enter your message!</h1></title></head>");
        res.write('<body><form action="/messages" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write("</html>");
        return res.end();
    
    }
    else if (url === "/messages" && method == "POST") {
    

        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });//allows us to listen to certain events
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                if (err) {
                    console.log(err)
                }
                res.statusCode = 302;
                res.setHeader('Location', '/');//also a default header accepted by the browser
                return res.end();
    
            }); 

            
        })//this will be fired when we 're done parsed incomming request  data
        
    } 
    else {
        res.setHeader('Content-Type', 'text/html')
        res.write("<html>");
        res.write("<head><title>my first practice</title></head>");
        res.write("<body><h1>Hi From node js server<h1></body>");
        res.write("</html>");
        res.end();
    
    }
    

}

//exporting methods:1

// module.exports=requestHandler;

//exporting:multiple things method:2
// module.exports={
//     handeler:requestHandler,
//     someText:'request handeller text'
// }

//exporting method:3

//exports.handeler=requestHandler;
//exports.someText="hi my name is abhishek";




module.exports.handeler=requestHandler;
module.exports.someText="hi my name is abhishek adhikary from dabadari,lowada,midnapur(west)";



