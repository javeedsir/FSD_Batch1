
import express from 'express';  // express 5 latest version

//const express =  require('express');  // till old version express 4.0 

const app = express();

const PORT =  process.env.PORT || 3000 ;


// Runs on EVERY request
app.get('/hello',(req, res, next) => {
  console.log(`${req.method} request made to: ${req.url}`);
  //next(); // Crucial: passes control to the next middleware/route
});



app.listen(PORT , ()=>{

    console.log(`server running at PORT http://localhost:${PORT}`);
});