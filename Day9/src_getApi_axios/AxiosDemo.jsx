import { useState } from "react";

import axios from "axios";


export default function AxiosDemo(){

const [records,setRecords] = useState([]);

  const  apiGet = () =>{

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then( (response) => 
            {
                     //set the data to  state
                    setRecords(response.data);
            }
        ).catch(error=>
            {
                this.setRecords(error);
            })

  }

  return ( 
    <>
        <h1>FETCH API using Axios</h1> 
        <button className="container col-md-4 btn btn-success" onClick={apiGet}>Show Users</button>
        <br></br> 
        
        <div>
        <table className="table table-dark">
         <thead>
             <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>UserName</th>
                 <th>Email</th>
             </tr>
         </thead>
         <tbody>
            {
                records.map((item)=>
               <tr key={item.id}>
                   <td>{item.id}</td>
                   <td>{item.name}</td>
                   <td>{item.username}</td>
                   <td>{item.email}</td>
                </tr>
                )
            }
        </tbody>

        </table>
        </div>
    </>
);
}


