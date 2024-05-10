const express = require('express');
const app = express();

const PORT = 5000;

app.get('/', (req,res) => {
    res.send('This my node app docker image....');
});

app.listen(PORT, ()=> console.log(`server is running on PORT : ${PORT}`));


