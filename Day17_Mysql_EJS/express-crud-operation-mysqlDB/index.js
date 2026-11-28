

import  express from 'express'
import mysql from 'mysql2/promise'

const app =  express();

const PORT = 3000;

app.listen(PORT , ()=>{

        console.log(`Server Running on PORT ${PORT}`);

} );

app.use(express.json());


const pool = mysql.createPool(
        {

            host:'localhost',
            user:'root',
            password:'admin',
            database:'upgrad_db'

        }

);



// 1. GET ALL Employees (GET ALL)
app.get('/employees' , async (req,res)=>{


        try{

            const  [rows]  =  await  pool.query("select * from Employees");

                res.json(rows);
        }
        catch(error){

                res.status(500).json({message:"Database Query failed"})


        }


});

//2. INSERT Employee (POST)
app.post('/insert', async (req,res)=>{

        try{
             const {id,ename,salary,doj} =       req.body;

            const [result] = await        pool.query(
                        "INSERT INTO Employees values(?,?,?,?)" , [id,ename,salary,doj]

                    );

                res.status(201).json({id , ename,salary,doj})

        }
        catch(err){

            res.status(500).json({error: err.message})

        }

});

// 3. READ: Get a single Employee by ID (GET)
app.get('/employees/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Employee not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});





// 4. UPDATE Employee Record (PUT)
app.put("/update/:id", async  (req,res)=>{

    try{
     const {ename,salary,doj}    =  req.body;
     const  id = req.params.id;

                  
                    const [result] =await pool.query(

                "update Employees set ename = ? , salary = ? , doj =?  where id = ?",
                            [ename,salary,doj,id]
                    );




  if (result.affectedRows === 0) 
    return res.status(404).json({ message: 'employee not found' });
    res.json({ id, ename, salary, doj });

  }
   catch (err) {
    res.status(500).json({ error: err.message });
  }


});

// 5. DELETE: Remove a employee (DELETE)
app.delete('/delete/:id', async (req, res) => {
    try {
      const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [req.params.id]);
      if (result.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' });
      res.json({ message: 'Employee deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });





