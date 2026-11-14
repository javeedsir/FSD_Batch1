import React from 'react'
import useCustomCounter from "./useCustomCounter"

function App()
{
    //storing custom hook 
    const data=useCustomCounter();

    return (
            <>
                <h1>Count up : {data.count}</h1>
                <button onClick={data.handleIncrement}>Click</button>
            </>
    )
}
export default App;
