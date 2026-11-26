
import  express from  'express'

const app = express();

const admin = express();

const PORT = process.env.PORT || 3000;


admin.on('mount',()=>{

        console.log('Admin Mounted');

})


admin.get('/', function (req, res) {
    console.log(admin.mountpath); // /admin
    res.send('Admin Homepage');
});
app.use('/admin', admin); // Mounting the sub app


app.listen(PORT, function(err){
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});