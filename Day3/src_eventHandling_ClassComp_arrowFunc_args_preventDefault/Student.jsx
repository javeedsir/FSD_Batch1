
import React , { Component } from "react";


export default  class Student extends React.Component {

        constructor(props){
                super(props);


                this.state = {
                                name:"King",
                                id: this.props.rollNo

                }


        }

        handleClick = ()=>{

                console.log('button clicked .. ', this)

        }


         handleEvent = (e) =>{

                 e.preventDefault();

                    console.log('handleEvent() called..', e)

         }

        sum = (a , b)=>{

                console.log('sum of a+b  ', (a+b))

        }

        calculate = () => {


                this.sum(4,5);

        }



        render(){


                return <>
                
                    <h1>Student Component</h1>
                    <button onClick={this.handleClick} >Click</button>
                
                    <h1> { this.state.name }  and {this.state.id} </h1>

             <a href="http://www.google.com" 	onClick={this.handleEvent}>click google</a>
                    <br/>


                    <button onClick={this.calculate} >Calculate</button>


                
                </>



        }





}