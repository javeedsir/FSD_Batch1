
import { createContext } from 'react';
import Acomponent from './Acomponent';

export const UserContext= createContext();
function App()
{
    	
    return (
        <div>
            <UserContext.Provider value={'I LOVE INDIA'}>
            <Acomponent/>
            </UserContext.Provider>
           
        </div>
    )
}

export default App
