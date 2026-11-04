import { Component } from "react";



export class Employee extends Component{

        constructor(props){

                super(props)

                 
                this.state = {

                        projectName: "Banking App",
                        client:"HDFC Bank",
                        mid: this.props.eid

                }


        }

       



            state = {
                    id: this.props.eid,
                    ename:"john",
                    salary:50000,
                    job:"Developer"

            }



        render(){

           return     <>
                
               <h1>Employee Component : {this.props.eid}</h1>

               <h2> {this.state.id}</h2>
               <h2> {this.state.ename}</h2>

               <h2> {this.state.salary}</h2>

               <h2> {this.state.job}</h2>

                <h2> {this.state.mid}</h2>

                <h2> {this.state.projectName}</h2>

                <h2> {this.state.client}</h2>

                </>


        } 




}