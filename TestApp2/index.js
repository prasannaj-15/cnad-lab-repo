const http = require("http"); 
const fs = require("fs");

// console.log("hello");

// fs.writeFileSync("./test.txt", "hello world");

//fs.writeFile("./test.txt", "hello world", (err) => {});

// const res = fs.readFileSync("./test.txt", "utf-8");
// console.log(res);

// fs.readFile("test.txt", "utf-8", (err,result) =>{
//     if(err){
//         console.log("Error", err);
//     } else {
//         console.log(result);
//     }
    
// })

const myServer = http.createServer((req, res) => {
// console.log("New req rec");
const log = `${Date.now()}: ${req.url} New request Received\n`;
fs.appendFile("log.txt", log, (err, data) => {
    res.end("Hello from myServer");

});
});


myServer.listen(8000, () => console.log("Server started.."));
