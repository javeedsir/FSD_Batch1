import axios from "axios"



export default  function  PutApi() {

    const update = () =>{ 

    axios.put("http://localhost:3000/employees/1lo8KNKA3_s", 
        {
          "eid": 110,
          "ename": "OM kumar",
          "salary": 99999
        })
        .then((response)=>{ console.log(response)})
        .catch((err)=>{ console.log(err)});

    }

        return <>
        
            <button className="btn btn-warning" onClick={update}>Put Api</button>
        
        
        </>





}