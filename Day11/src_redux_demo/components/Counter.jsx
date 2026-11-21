
import { useDispatch, useSelector } from "react-redux"
import { Decrement, Increment , Reset } from "../redux/CounterAction";


export default  function Counter(){

       const   dispatch =      useDispatch();

       const counter = useSelector(state => state.counter)

        return <div  className="container">
        
        
            <h1>Counter Component</h1>
                 <h2>   Counter Value: {counter} </h2>

            <button className="btn btn-success"  onClick={()=>dispatch(Increment())}  >Increment</button>
            <button className="btn btn-danger"  onClick={()=>dispatch(Decrement())} >Decrement</button>
            <button  className="btn btn-warning" onClick={()=>dispatch(Reset())}  >Reset</button> 
        
        
        
        
        
        
        
        
        </div>







}