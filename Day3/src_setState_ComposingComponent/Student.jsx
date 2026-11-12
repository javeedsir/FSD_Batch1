

import React, { Component } from 'react'

export default class Student extends Component {
	state={
		name: "Alan",
		id: this.props.rollno
	}
	handleClick=()=>
	{
		//this.setState({name:"Kelvin",id:102});

            // this.setState(function(state,props){

            //         return {name:"Kelvin", id:701}



            // });


            this.setState((state,props)=>
                {
                    return {name:"Kelvin Sir",id:901}
                });


	}
  render() {
	return (
	  <div>
		  <h1>Name: {this.state.name}</h1>
		  <h1>Id: {this.state.id}</h1>
		  <button onClick={this.handleClick}>clickMe</button>
	  </div>
	)
  }
}
