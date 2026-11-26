
import express from 'express'

const app = express(); // The main app 
const student = express();
const teacher = express();

const PORT = process.env.PORT || 3000;

// Multiple mounting 
teacher.on('mount', function (parent) {
    console.log('Teacher Mounted');
});
student.on('mount', function (parent) {
    console.log('Student Mounted');
});

app.use('/student', student);
app.use('/teacher', teacher);


student.get('/' , (req,res)=>{

        res.send('Student Sub Application');

})

teacher.get('/', (req,res)=>{

    res.send('Teacher sub Application');

});



app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});