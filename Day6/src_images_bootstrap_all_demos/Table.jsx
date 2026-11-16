

export default  function Table(){

   const users = [ 
        {id:101,name:"raja",password:"rani"},
        {id:102,name:"king",password:"kingdom"},
        {id:103,name:"raj",password:"simran"},
        {id:104,name:"javeed",password:"tiger"},
        {id:105,name:"Kummu",password:"lion"},

  
      ]

    const  userList =  users.map(


            (user)=>{

          return  <tr><td>{user.id}</td><td>{user.name}</td><td>{user.password}</td></tr>

            }


    );


    const  list = users.map(

            (u)=>{

                    return <li className=" list-group-item  list-group-item-danger">
                        
                        
                        {u.name}

                        <span class="badge badge-success">{u.id}</span>
                    
                     </li>


            }


    );



    return <>
    
    
            <table className="container  col-lg-5   table table-dark">

                    {userList}  
                
                
            </table>   <br/>


            <ul  className="container col-md-4">

                    {list}

            </ul>
    <br></br>


        <h1 className="alert-success">Thank you ! Transaction completed Successfully</h1>
    
        <h2 className="alert-warning">Wait Server will reconnect in sometime</h2>
    
        <h3 className="alert-danger">Don't share you password with others</h3>
    
    </>





}