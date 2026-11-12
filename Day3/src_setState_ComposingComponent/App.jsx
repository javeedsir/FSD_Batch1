import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Student from './Student'

function App() {
  

  return (
    <>

<h1>Welcome to AppComponent</h1>
       
<Student rollno={601}></Student>

<Student rollno={701}></Student>

<Student rollno={801}></Student>


    </>
  )
}

export default App
