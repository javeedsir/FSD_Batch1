
import  express from 'express'

import router from  './routes/users.js'

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{

        console.log(`server running on PORT : ${PORT}`);

})

app.use("/api/users",router);


