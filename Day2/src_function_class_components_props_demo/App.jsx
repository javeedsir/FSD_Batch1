import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import User from './User'
import { Employee } from './Employee'

function App(props) {
  
        console.log(props)
  return (
    <>


      <Employee   ename="Om" ></Employee>
      <h1>Welcome to App Component</h1>
      <h2>Id is : {props.id}</h2>
      <h2>City Name : {props.city}</h2>
      <h2>IsACtive  : {props.isActive}</h2>
      <User  name="Javeed"  city={props.city}></User>
      <User name="King"   profile="{'eid':'101','ename':'king khan','salary':90000}"></User>
      <User name="Smith"></User>
    </>
  )
}

export default App
