import { Component } from 'react'


export default class  App extends Component{

    state = {

          value:"Upgrad Tech"

    }


  render(){


    return <>
    
                           <form>
                            <h2>Controlled by React</h2>
                            {/* <input type="text"  defaultValue="upgrad"/> */}
                              <input type='text'  defaultValue={this.state.value} />
                            </form>
    
    
    
      </>






  }



}