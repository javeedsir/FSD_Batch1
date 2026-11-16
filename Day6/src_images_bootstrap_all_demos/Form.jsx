


export default  function  Form(){


    return <div className="container col-md-4">
    
    
    <h2>HTML Forms</h2>

    <form >
  <label for="fname">First name:</label><br/>
  <input type="text"  id="fname" name="fname"  className="form-control"  value="John"></input><br/>
  <label for="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname" className="form-control"  value="Doe" /><br/><br/>
   <button type="submit" className="btn btn-success" >Submit</button>
    </form>  

    
    
    
    
    
    </div>



}