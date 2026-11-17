import React ,{ Component } from "react";




export default  class  SignUpForm extends Component {

        constructor(prop){
                super(prop)


        this.state = {

                        email:"",
                        password:"",
                        address:"",
                        city:"",
                        state:"",
                        zip:""
                        
                        
        }

                        this.emailInput = React.createRef();
                        this.passwordInput = React.createRef();
                        this.addressInput = React.createRef();
                        this.cityInput = React.createRef();
                        this.stateInput = React.createRef();
                        this.zipInput = React.createRef();


        }



                handleSubmit = (e) =>{
                                e.preventDefault();

                                this.setState({

                                    email:this.emailInput.current.value,
                                    password:this.passwordInput.current.value,
                                    address:this.addressInput.current.value,
                                    city:this.cityInput.current.value,
                                    state:this.stateInput.current.value,
                                    zip:this.zipInput.current.value            


                                })

                }



       render(){

                        return <div>

<form  onSubmit={this.handleSubmit}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4"  ref={this.emailInput} />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" ref={this.passwordInput} />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress"    ref={this.addressInput}    placeholder="1234 Main St" />
  </div>
 
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"  ref={this.cityInput} />
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">State</label>
      <select id="inputState" className="form-control" ref={this.stateInput} >
        <option >Choose...</option>
        <option>Telangana</option>
        <option>Maharastra</option>
        <option>Karnataka</option>
        <option>Delhi</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip" ref={this.zipInput} />
    </div>
  </div>
 
  <button type="submit" className="btn btn-primary">SignUp</button>
</form>


                <p>{this.state.email}  {this.state.state}</p>


 </div>
        
       }






}