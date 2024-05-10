const express = require("express");
//import bodyParser from 'body-parser';
const bodyParser = require("body-parser");

const app = express();

const PORT = 5000;

  app.use(express.json());

let users = [
    {
        id : "1",
        firstName : "Harry",
        lastName : "Potter",
        gender : "male"
    },
    {
        id : "2",
        firstName : "Ron",
        lastName : "Weasley",
        gender : "male"
    }

]

// All Routes

// home page routes

// localhost:5000

app.get("/", (req, res) => {
    return res.send("This is Homepage of the website");
});

// users route
app.get("/api/users", (req, res) => {
    return res.send(users);
});

// get userdetails using id

app.get("/api/users/:uid", (req, res) => {

    const  {uid}  = req.params; 
    console.log(`${uid}`);

    const foundUser = users.find((user) => user.id === uid);
    console.log(foundUser);
    return res.send(foundUser);
});

// Post 
app.post("/api/users", (req,res) => {

     const user = req.body;
     users.push(user);
     console.log(user);
    //return res.send(`User is updated with name ${user.firstName}`);
    return res.send(users);
});


// put 
app.put("/api/users/:id", (req,res) => {

    const { id } = req.params;
    const user = req.body;
    const foundUser = users.find((user) => user.id === id);
    users.push(user);

    //console.log(user);
   //return res.send(`User is updated with name ${user.firstName}`);
   return res.send(foundUser);
});






app.listen(PORT, () => console.log(`Server started at PORT : ${PORT}`));

