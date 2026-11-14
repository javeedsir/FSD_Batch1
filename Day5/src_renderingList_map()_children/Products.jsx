import Address from "./Address";


export default function Products(props){


        return <div>
            
            
            
                <h1>This is Product Component : {props.pname}</h1>

                <h2>This is Product access Address as child using props: {props.children}</h2>
            
            
            
            </div>;



}