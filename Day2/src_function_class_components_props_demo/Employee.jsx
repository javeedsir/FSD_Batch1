
import React from "react"



export class Employee extends  React.Component{

        constructor(){
                super();
                    console.log('Employee() constructor is called..')


                    
        }

        show(){

               alert('show() from Employee class');

        }

      


    render(){


        return <>

                
        
                 <h1>Welcome to Employee Component  : {this.props.ename}</h1>   
                  <button type="button"   onClick={this.show} >Show</button>  
        
            </>


    }





}