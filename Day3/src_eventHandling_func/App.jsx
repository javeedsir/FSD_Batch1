
import './App.css'
import Student from './Student'


function validate(){

  alert('validate() is invoked..');


}

function App() {
  

  return (
    <>
     
    
   <h1> App Component</h1>
   <button type='button'  onClick={validate} >Click</button>

     


    </>
  )
}

export default App
