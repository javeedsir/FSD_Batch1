import axios from "axios";
import { useState } from "react";


export default function  GetApi(){

    
    const [empList, setEmpList]  = useState([]);


        const get = () =>{


                axios.get("http://localhost:3000/employees")
                .then( (response) =>{ 
                    console.log(response);
                    setEmpList(response.data);
                })
                .catch((err)=>{ console.log(err)})


        }



        return <>
        
        <table className="table table-dark">
        {empList.map((emp)=>{ 

        return    <tr> <td>{emp.eid}</td> <td>{emp.ename}</td> <td>{emp.salary}</td> </tr>

        })}
      </table>
        
        <button  className="btn btn-primary"  onClick={get} >Get All Employees</button>
        
        
        
        </>




}