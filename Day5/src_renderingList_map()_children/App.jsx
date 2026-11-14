import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Products from './Products'
import Address from './Address'

function App() {
  
  const numbers = [101,102,103,104,105];


  const listItems =      numbers.map( (num,index)=>{  

              return  <li key={index}> {index} : {num}</li>

        });


        const products = [

          {id:101,name:"Mobile",price:12000},
          {id:102,name:"Laptop",price:42000},
          {id:103,name:"Charger",price:1000},
          {id:104,name:"PowerBank",price:3000},
          {id:105,name:"Keyboard",price:900}
  
  
  ];


      const productList =  products.map( 

              (p)=>{
                   return <tr >
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.price}</td> 
                    </tr>

              }


      );


    const  mybutton =  products.map(

        (p)=>{

           return   <button className='btn btn-primary'>{p.name}</button>

        }


    );




  return (
    <div className='container  col-md-5'>

    <ul>  {listItems}  </ul>  <br/>


    <table className='table table-dark'> 
    {productList}

    </table>

    <br/>

    All Products in Button format: <br/>

    {mybutton} <br/>



    <Products  pname="Kids Toys">
            <Address></Address>
            <button  className='btn btn-danger'>Click</button>

    </Products>
    
    </div>
  )
}

export default App
