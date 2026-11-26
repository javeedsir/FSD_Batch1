
import  express from  'express'

const app = express();

const user = express();

const PORT = process.env.PORT || 3000;



user.get('/', function (req, res) {
    console.log(user.mountpath); // /user
    res.send('User Homepage');
});
app.use('/user', user); // Mounting the sub app


app.listen(PORT, function(err){
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});