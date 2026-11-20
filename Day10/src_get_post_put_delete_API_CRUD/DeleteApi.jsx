import axios from "axios"

export default  function DeleteApi(){


    const remove =  ()=>{


            axios.delete("http://localhost:3000/employees/1lo8KNKA3_s")
            .then( (response)=>{ console.log(response.status)})
            .catch((err)=>{ console.log(err)})

    }

    return <>
    
    
        <button className="btn btn-danger" onClick={remove} >Delete Api</button>
    
    </>




}