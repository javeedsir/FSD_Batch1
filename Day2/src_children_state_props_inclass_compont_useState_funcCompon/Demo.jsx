import { useState } from "react"









const Demo = (props)=>{

        const[count, setCount] =    useState(0);

        
function increase(){

    setCount(count+1);

}

           

    return <>
    
    
            <h1> Count Value :  {count}</h1>

            <button type="button"  onClick={increase}  >Increase</button>

    
    </>



}

export default Demo;