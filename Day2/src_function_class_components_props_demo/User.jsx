import React from "react";

 function  User(props){

        

    return <React.Fragment>

                <h1>User Component :{props.name}</h1>
                <h2>City Name from App to User : {props.city}</h2>
                <h3>Profile Details: {props.profile}</h3>


          </React.Fragment>


}

export default User;