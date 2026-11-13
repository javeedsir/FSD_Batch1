import { Customer } from "./Customer";



export function Bank(props){


    return (


            <>
                <h1> Bank Component Data : {props.name}</h1>
            
                <Customer  name={props.name}></Customer>
            </>

    )





}