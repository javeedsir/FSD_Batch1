import { Component } from "react"


export default class TextArea  extends Component {

        state = {

                value:"Hello Friends , this is text area in controlled form"

        }

        handler = (e)=>{

                this.setState({value:e.target.value});

        }


    render(){

        return <div>


            <textarea value={this.state.value} onChange={this.handler}  ></textarea>




        </div>




    }






    



}