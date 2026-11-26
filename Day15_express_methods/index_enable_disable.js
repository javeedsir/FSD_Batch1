

import  express from  'express'

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{

    console.log("Server Running On PORT ",`${PORT}`);
})

app.enable('trust proxy')

//app.disable('trust proxy disable');

console.log(app.get('trust proxy')) // true