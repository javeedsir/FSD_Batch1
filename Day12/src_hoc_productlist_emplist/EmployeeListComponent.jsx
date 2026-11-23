
import { Component } from "react";
import TableRow from "./TableRow";

export default class  EmployeeListComponent  extends Component {

    constructor(props){

        super(props);


    }



    tabRow(){

        if(this.props.data instanceof Array){

     return this.props.data.map((object,i)=>{
                  console.log(object)

                return <TableRow  obj={object}  key={i}></TableRow>
                  });


        }

    }

    render(){

        return (
            <div className='container col-md-4'>
              <table  className='table table-dark'>
      
              <thead>
                  <tr> <td>Id</td> <td>EName</td> <td>Salary</td></tr>
              </thead>
      
              <tbody>
                  {this.tabRow()}
      
              </tbody>
      
      
      
              </table>
      
              
            </div>
          )







    }













}









