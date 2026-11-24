const express = require('express');
const app = express();



app.get('/getuser/:userId/:userName', (req, res) => {
    //res.send('Welcome to Express Routing!');
    res.send(`GET User Id : ${req.params.userId} - User Name: ${req.params.userName}`);
});

app.post('/postuser/:userId/:userName', (req, res) => {
    //res.send('Welcome to Express Routing!');
    res.send(`POST details User Id : ${req.params.userId} - User Name: ${req.params.userName}`);
});


app.put('/putuser/:userId/:userName', (req, res) => {
    //res.send('Welcome to Express Routing!');
    res.send(`PUT/UPDATE details User Id : ${req.params.userId} - User Name: ${req.params.userName}`);
});


app.delete('/deleteuser/:userId', (req, res) => {
    //res.send('Welcome to Express Routing!');
    res.send(`DELETED User Id : ${req.params.userId} `);
});

app.get('/hello',(req,res)=>{

        res.send("Hello World");
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});