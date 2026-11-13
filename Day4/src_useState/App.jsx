import { useState } from 'react'

import './App.css'

function App() {

      const   nameStateArray = useState("Alan");

      const    [city,setCity] = useState("Hyderabad");
  

      const handleClick = ()=>{

           nameStateArray[1]('Javeed');

      }

      const  changeCity = () =>{


            setCity('Pune');
      }



  return (
    <>
    
        <h1>{nameStateArray[0]}</h1>

        <h2>{city}</h2>

        <button type='button'  onClick={handleClick} >Update Value</button> <br/>

        <button type='button'  onClick={changeCity}  > Change City</button>
    </>
  )
}

export default App
