
import { configureStore } from '@reduxjs/toolkit'
import { CounterReducer } from './redux/CounterReducer'
import Counter from './components/Counter'
import { Provider } from 'react-redux'


function App() {
  

  const  mystore = configureStore({

        reducer:{ 

            counter:CounterReducer
          

        }


  })

  return (
    <>
      <Provider  store={mystore}>
      <Counter></Counter>


      </Provider>
     
    
    </>
  )
}

export default App
