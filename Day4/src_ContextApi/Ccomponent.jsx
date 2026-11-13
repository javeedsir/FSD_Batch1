
import { UserContext } from "./App";

function Ccomponent()
{
    return (
    <div>
     <UserContext.Consumer>
         {
             (user) => {
                 return <div>The value is : {user} in Ccomponent </div>
             }
         }	
     </UserContext.Consumer>

	
    </div>
    )
}
export default  Ccomponent;