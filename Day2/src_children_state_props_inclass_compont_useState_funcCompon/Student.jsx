



 const Student = (props)=>{


            return <>

                    <h1>Student Component : {props.name}</h1>

                    <div> {props.children}  </div>
            
            </>

 }

 export default Student;