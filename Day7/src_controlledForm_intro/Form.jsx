
import { Component } from "react";


export default  class Form extends Component {

        state ={

            value:"Upgrad"

        }


        handler = (e)=>{

                console.log("changed");
                console.log(e.target.value)
                this.setState({value:e.target.value});
              //  this.setState({value:e.target.value.toUpperCase()});
             // this.setState({value:e.target.value.substr(0,4)});

        }



    render(){

         return   <div>

                    <form>
                    <h2>Controlled by React Component</h2>
                    <h3>{this.state.value}</h3>
                    <input type="text"  defaultValue={this.state.value}  onChange={this.handler}  />


                    </form>




            </div>



    }








}