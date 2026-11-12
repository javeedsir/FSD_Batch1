
import './App.css'

import styles from './mystyles.module.css'



function App() {
  
  const mystyle = {
    color: "red",
    backgroundColor: "DodgerBlue",
    padding: "20px",
    fontFamily: "Arial"
  };


  return (
    <>

    
         {/* <h1 style={{color:"green"}}>React Inline CSS</h1>  */}


         <h1 style={mystyle}>React Inline CSS</h1>

         <h1 style={{backgroundColor:"yellow",padding:"20px"}}>React Inline CSS</h1>


         <h2 className='cls'>This is line styled using external css file</h2>

         <h3 id='myid'>This is style using ID selector</h3>


         <h1  className={styles.mystyle}> HELLO 1  </h1>
         <p className={styles.parastyle}>Hello Para style</p>
    
    </>
  )
}

export default App
