
const module1 = require("./module1");

const fs = require("fs");

const http = require("http");


const myServer = http.createServer((req,res) => {
    res.end("This is my app");
});

let str = "Hello my name is Sam";

// fs.writeFileSync("test.txt", str);

fs.appendFileSync("test.txt", str+"\n");

const file_data = fs.readFileSync("test.txt", "utf-8");

console.log(file_data);

// console.log(module1.funAdd(4,2));


myServer.listen(8000, () => console.log("server is started at port 8000"));


