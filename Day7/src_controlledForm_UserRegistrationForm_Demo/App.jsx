import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {




  
  const [userRegistration,setUserRegistration]= useState({
    username:"",
    password:"",
    date:"",
    category:"",

})

const [records,setRecords]= useState([]);

const handleChange =(e)=>
{
const name= e.target.name; //1. username , 2. password
const value= e.target.value;  // 1. javeed  , 2. tiger
 setUserRegistration({... userRegistration,[name]:value});   //this.setState({username:"javeed"}); 
}
const handleSubmit = (e) => {
e.preventDefault();
console.log(JSON.stringify(userRegistration));
const newRecord=    {... userRegistration, id:new Date().getTime().toString()}; 
setRecords([... records,newRecord]);

//making data empty after submission
setUserRegistration({username:"",password:"",date:"",category:""});
}


const  userList = records.map((user)=>{

  return <tr key={user.id}> 
    <td>{user.id}</td>
  <td>{user.username}</td>
  <td>{user.password}</td>
  <td>{user.date}</td>
  <td>{user.category}</td>
  </tr>

});



return (
       
<>
<div className="container  col-md-5">
   <form onSubmit={handleSubmit}>
    <label htmlFor="username">UserName:</label>
    <input type="text" className="form-control" name="username" placeholder="Enter the name " 
       value={userRegistration.username}
       onChange={handleChange} />

    <label htmlFor="password" className="mt-3">Password</label>
    <input type="password" className="form-control" name="password" placeholder="Enter the password"
       value={userRegistration.password}
       onChange={handleChange} />

    <label htmlFor="date" className="mt-3">Date</label>
    <input type="date" className="form-control" name="date" placeholder="Enter the date" 
       value={userRegistration.date}
       onChange={handleChange} />

    <label htmlFor="category" className="mt-3">Category</label>
    <select className="form-control" name="category"
       value={userRegistration.category}
       onChange={handleChange} >
      <option value="">Select</option>
      <option value="Food">Food</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Academic">Academic</option>
    </select>
   
    <input type="submit" className="btn btn-primary w-100 mt-4" value="Submit" />
   </form>
  
  <br/>
  <br/>


   <table className='table table-dark'> 
   <tr > 
    <td>ID</td>
  <td>USERNAME</td>
  <td>PASSWORD</td>
  <td>DATE</td>
  <td>CATEGORY</td>
  </tr>


    {userList}
    
     </table>

 </div>






 </>


)




}
export default App;
