
import express from 'express'

const app = express();

const PORT =   process.env.PORT   || 4040;


    app.listen(PORT , ()=>{

        console.log(`server running on PORT : ${PORT}`);
    })


app.get('/files/*doc' , (req,res)=>{


        res.json({path:req.params.doc});

})

