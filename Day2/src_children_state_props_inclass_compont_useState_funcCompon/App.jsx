import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Student from './Student'
import { Employee } from './Employee'
import Demo from './Demo'

function App() {
  

  return (
    <>

      <Student name="Satish">

        <h1>I am child element of Student</h1>
      </Student>

      <Employee  eid ="101"></Employee>
    
      <Demo ></Demo>

    </>
  )
}

export default App
