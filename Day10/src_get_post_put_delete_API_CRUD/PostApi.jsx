import axios from "axios"


export default function PostApi(){


        const add = ()=>{

                axios.post("http://localhost:3000/employees" , 


                        {
                            "eid":110,
                            "ename":"Om prakash",
                            "salary":60000

                        }

                )
                .then((response)=>{ alert(response.status)})
                .catch( (err)=>{ console.log(err)} )





        }


        return <>
        
            <button className="btn btn-success" onClick={add} >Post Data</button>
        
        </>




}