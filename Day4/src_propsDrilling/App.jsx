import { useEffect, useState } from 'react'
import { Bank } from './Bank';

function App(props) {

  const [count,setCount]=useState(0);

  const handleClick=()=>
  {
         setCount(count+1); 
  }



    useEffect(()=>{

         // Update the document title using the browser API  

            document.title = `${props.name} clicked ${count} times`

           

    });


  

  return (
      <>
       <Bank  name={props.name} />

        <h1>You Clicked  {count} times</h1>
      <button type='button'  onClick={handleClick}>Click</button>


    </>
  )
}

export default App
