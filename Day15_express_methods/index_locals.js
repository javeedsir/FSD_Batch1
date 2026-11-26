import  express from  'express'

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{

    console.log("Server Running On PORT ",`${PORT}`);
})


app.locals.email = "javeed@gmail.com";
app.locals.username = "Javeed Sir";


app.get('/',(req,res)=>{


               // res.send(app.locals.email);

              // res.json({username: app.locals.username})

                res.json(app.locals)



})



