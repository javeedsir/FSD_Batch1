

import express from 'express'
import ejs  from 'ejs'

const app = express();
const PORT = 3000;

// View engine setup 
app.set('view engine', 'ejs');

app.render('users', function (err, html,res) {
    if (err) console.log(err);
    console.log(html);

});


app.engine('html',ejs.renderFile);


app.get('/login',(req,res)=>{

        res.render("login.html");

});

app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup");
    console.log("Server listening on Port", PORT);
});