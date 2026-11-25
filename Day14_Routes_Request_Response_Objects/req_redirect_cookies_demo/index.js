import  express from  'express'

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{

    console.log("Server Running On PORT ",`${PORT}`);
})


app.get("/one",(req,res)=>{

    console.log('request to /one')
        res.redirect('/two');

})

app.get('/two', (req,res)=>{

        console.log('request redirected to /two');
        res.status(300).json({redirectTo:req.originalUrl})

})

app.get('/createCookies',(req,res)=>{


        res.cookie('username','Javeed');

})



