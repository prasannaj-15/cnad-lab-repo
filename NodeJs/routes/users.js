import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();


let users = [
    // {
    //     firstName: "Harry",
    //     lastName : "Potter",
    //     age: 25 
    // },
    // {
    //     firstName: "Emma",
    //     lastName : "Watson",
    //     age: 25 
    // },
]

// all routes in here are starting with '/users'
router.get('/', (req,res) => {
    res.send(users);
});

router.post('/', (req,res) => {
    console.log('POST route reached..');

    const user = req.body;
    users.push({...user, id:uuidv4()});
    res.send(`User with the name ${user.firstName} added to the database!`);
});


router.get('/:id', (req,res) => {
    const { id } = req.params;
 
    const foundUser = users.find((user) => user.id === id);
    console.log(foundUser);
    res.send(foundUser);

});

router.delete('/:id', (req,res) =>{

    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database.`);

});


export default router;











