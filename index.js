//Building a simple HTTP server in Node.js, 
//understanding request handling, and implementing non-blocking tasks 
//to avoid thread pool exhaustion.
const http = require('http');
const fs = require('fs');
// req is client metadata (ip address, mail  and all);
// to run the server we require port number
const myserver = http.createServer((req, res)=>{
    const log = `${Date.now()}:${req.url}New req Received\n`
    fs.appendFile('log.txt', log, (err)=>{
       switch(req.url){
        case "/":res.end("this is home page")
        break;

        case "/about":res.end("i am bhumika raheja");
        break;
        default:
            res.end("404 not found")
       }
    });
});
// to handle the server there is handler funtion to functioning the incoming process  that is ----->
//The requestListener is a function which is automatically added to the 'request' event.
myserver.listen(8000, ()=>{console.log("server started")});