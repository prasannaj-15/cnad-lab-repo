const express = require('express');
const app = express();
const fs = require('fs')

const PORT = 5500;

const data = [
    {
    "firstname" : "vanshika",
    "last-name" : "gupta",
    "address" : "sonipat"
    },
    {
    "firstname" : "prashansa",
    "last-name" : "erica",
    "address" : "sonipat"
    }    
]


// routes

//get,post,put/patch,delete
//localhost:5500
app.get('/', (req,res) => {
    res.send("This is new app");
   
});

app.get('/api/getdata', (req,res) =>{
    res.send(data);
})



app.listen(PORT, ()=> console.log(`Server is running on port : ${5500}`));