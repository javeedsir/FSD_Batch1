import { useEffect, useState } from 'react'


function App() {

  const [count,setCount]=useState(0);

  const handleClick=()=>
  {
         setCount(count+1); 
  }



    useEffect(()=>{

         // Update the document title using the browser API  

            document.title = `You clicked ${count} times`

           

    });


  

  return (
    <>
    
        <h1>You Clicked  {count} times</h1>
      <button type='button'  onClick={handleClick}>Click</button>


    </>
  )
}

export default App
