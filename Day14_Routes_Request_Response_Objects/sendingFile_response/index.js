import  express from  'express'

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{

    console.log("Server Running On PORT ",`${PORT}`);
})


app.get("/search" , (req,res)=>{

                //   res.json({query: req.query});

                const{ pname , price  }  = req.query;

                res.json({pname , price})

})


app.get("/files/*doc", (req,res)=>{


      //  res.json({path: req.params.doc});

    res.sendFile('/input.txt');


})
