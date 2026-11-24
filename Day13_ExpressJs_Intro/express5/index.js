
import express from 'express';  // express 5 latest version

//const express =  require('express');  // till old version express 4.0 

const app = express();

const PORT =  process.env.PORT || 3000 ;


app.get("/hello",(req,res)=>{


     res.send('welcome to  Express!');
    //res.sendStatus(200); // OK
  
    
});

// optional path variable {:productId}  below

app.get('/products/{:productId}', (req, res) => {
    res.send(`Product ID: ${req.params.productId || 'No product selected'}`);
});





app.get("/search",(req,res)=>{


    res.send(`Search results for: ${req.query.q}`);
 
   
});



app.listen(PORT , ()=>{

    console.log(`server running at PORT http://localhost:${PORT}`);
});




app.get('/example', (req, res, next) => {
    console.log('First handler executed ');
    console.log('Request1 param ', req.query.q)
    next();
}, (req, res) => {
    res.send(`Response from second handler  ${req.query.q}`);
});