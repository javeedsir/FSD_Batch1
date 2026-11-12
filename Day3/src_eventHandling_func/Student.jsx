
import React, { Component } from 'react'

export default class Student extends  React.Component{

    constructor(props)
	{
		super(props);
		this.handleClick=this.handleClick.bind(this);	
        this.sayHello = this.sayHello.bind(this);
	}
	handleClick()
	{
		console.log("button is clicked ",this);
	}

    sayHello(){


            console.log("Hello Friends ", this);
    }

     display = ()=>{


            console.log('Display() arrow function called.. ',this)

     }



  render() {
	return (
	  <div>
	  	<h1>React Event</h1>
		<button onClick={this.handleClick}>clickMe</button> <br></br>

        <button onClick={this.sayHello} >Hello</button>  <br/>

        <button onClick={this.display} > Display </button>
	  </div>
	)


    }







}