import React  ,{ Component } from "react";



export default class App extends Component {

  constructor(props){

      super(props);

          this.state = 
          {
            value:"" , 
            pwd:""
          }

          //create ref object

          this.textInput =      React.createRef();
          this.password = React.createRef();

  }

    handleSubmit = (e)=>{

        e.preventDefault();
        // set the text field data to the state(value)

        this.setState({value:this.textInput.current.value , 
                          pwd:this.password.current.value
                        });

        console.log(this.textInput.current)


    }

    componentDidMount=()=>
      {
         this.textInput.current.focus();
      }


      render(){


          return <div className="container col-md-8">

              <h2>Your Name is: {this.state.value} and Password is : {this.state.pwd}</h2>

            <form  onSubmit={this.handleSubmit}>
                Enter your Name: <input type="text" ref={this.textInput} className="form-control" /> <br/>
                Enter your Password: <input type="text" ref={this.password}  className="form-control"/> <br/>
                <button type="submit"  className="btn btn-primary" >Submit</button>



            </form>







          </div>


      }


}
