
import express from 'express'

const app = express();  // server application

app.use(express.json());

const PORT = 3000;

app.listen(PORT,()=>{

    console.log(`Server Running on PORT ${PORT}`);
})

const employees = [

        {id:101, ename:"King" , salary:80000},
        {id:102 , ename :"Tom" , salary:45000},
        {id:103 , ename :"Smith" , salary:35000},
        {id:104 , ename :"Ford" , salary:30000},
        {id:105 , ename :"Javeed" , salary:20000}

];

    


// fetching or reading records

app.get('/api/employees' , (req,res)=>{

            res.json(employees);

});

// fetching reacord by id

app.get("/api/employees/:id" ,(req,res)=>{

        const id =    req.params.id;

    const employee =        employees.find((emp)=>{return emp.id == id})

            if(!employee){

                return res.status(404).json({message:"Employee Record Not Found"});


            }

            res.json(employee);

});

let nextId = Math.round(Math.random()*1000);

// create or post  a new resource 
app.post('/api/employees/create', (req,res)=>{

            const{ ename , salary} = req.body;


                if( !ename || !salary){

                        return res.status(400).json({message: "all employee properties are mandatory"});

                }


                const  newEmp = {id:nextId++ , ename , salary};

                employees.push(newEmp);

                    res.status(200).json(newEmp);
});


// upate or replace  resource by id

app.put('/api/employees/:id', (req,res)=>{

            const id = parseInt(req.params.id);

        const  employee =    employees.find( (emp)=>{return emp.id === id });

            if(!employee){

                res.status(404).json({message:"Employee Not Found"});
                
            }

                const  {ename , salary}  = req.body;

                if(!ename || !salary){

                    res.status(400).json({message:"ename and salary is required"});
                }

                employee.ename = ename;
                employee.salary = salary;


                    res.json(employee);

});


// patch method used for partial update any one property


app.patch('/api/employees/:id', (req,res)=>{

    const id = parseInt(req.params.id);

const  employee =    employees.find( (emp)=>{return emp.id === id });

    if(!employee){

        res.status(404).json({message:"Employee Not Found"});
        
    }

        const  {ename , salary}  = req.body;

        if(ename != undefined){

                employee.ename = ename;
        }

        if(salary != undefined){

             employee.salary = salary;
        }



            res.json(employee);

});

// delete record by id

 app.delete('/api/employees/:id', (req,res)=>{

        const id =  parseInt(req.params.id);


      const index =          employees.findIndex( emp => emp.id === id);


        if(index ==  -1){

                res.status(404).json({message: 'Record Not Found'});

        }


      const  deletedRecord =      employees.splice(index , 1);


            res.json({

                    message: 'Employee Record deleted successfully',
                    employee: deletedRecord[0]

            });


 });


