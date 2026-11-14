import { useRef, useState } from 'react'
import UseRefDemo from './UseRefDemo';
import UseRefDemo2 from './UseRefDemo2';


function App() {
  
  const  [name,setName] = useState("No Name");
  const  ref = useRef("");

  const handleClick = () =>{

          // update name in state variable name

       //   setName("Alan");

        ref.current = "Kelvin"

        console.log(ref)

       


  }


  return (
    <>

      <div>
        <h1>Name : {name}</h1>
        <button  onClick={handleClick} >Click</button>
      </div>


      <UseRefDemo></UseRefDemo> <br/>

      <UseRefDemo2></UseRefDemo2>

    </>
  )
}

export default App
