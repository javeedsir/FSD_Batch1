import pic from '../src/react.png'
import NavBar from './NavBar'

import Table from './Table'

import Form from './Form'
import SignupForm from './SignupForm'

function App() {
  

  return (
    <>

    <NavBar></NavBar>

  <span className="glyphicon glyphicon-search" aria-hidden="true"></span> Search

  <br/>


  <div className="glyphicon  glyphicon-dog"></div> 
  <br></br>
    <div className="glyphicon  glyphicon-heart"></div>

    {/* <img src="upgrad.png" alt="mypic"/> <br/>
 
    <img  src="upgrad.png" alt="logo" />  <br/>

    <img  src={pic}  alt="react logo" />  <br/>


    <img  src={pic}  alt="react logo" />  <br/>


    <img  src={pic}  alt="react logo" /> */}

      
<div className='col-md-3'>

    <button className='btn btn-primary' >Primary </button>
    <button className='btn btn-success' > Success </button>
    <button className='btn btn-danger' > Danger </button>
    <button className='btn btn-warning' > Warning </button>

    </div>
    
      <Table></Table> <br></br>


      <Form></Form> <br/>


      <SignupForm></SignupForm>

    </>
  )
}

export default App
