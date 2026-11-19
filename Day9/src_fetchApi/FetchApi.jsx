import { useState } from "react"


export default function FetchApi(){


        const[records,setRecords] =  useState([]);

       const  getUsers = ()=>{

                    fetch("https://jsonplaceholder.typicode.com/users")
                    .then((response)=> response.json())
                    .then( (data)=>{ 
                        setRecords(data); // set response data to records[]
                    })



        }


            const  users =  records.map( (r1) =>{


                    return  <tr> <td>{r1.id}</td><td>{r1.name}</td><td>{r1.email}</td><td>{r1.website}</td>  </tr>



            }
        );




    return <div>

        <h1>Fetch API Demo</h1>

        <button  onClick={getUsers} className="btn btn-primary" >Get All Users</button>


        <br/>

                {/* {JSON.stringify(records)} */}

                <br/>

        <div className="container col-md-6">
           <table className="table table-dark" >

                {users}

            </table>

            </div>


    </div>




}