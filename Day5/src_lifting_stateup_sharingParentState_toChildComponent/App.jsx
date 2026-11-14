

import { Component } from "react"

import User from "./User"
import Guest from "./Guest"

export default class App extends Component {
    state={
            name:"Javeed",
            code:9900
    }
    render() {
            return <>
            
            <User  uname={this.state.name}  code={this.state.code}/>


            <Guest gname={this.state.name}    />

            </>
                   
        
    }
}