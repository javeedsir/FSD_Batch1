
import './App.css'

import  styled from 'styled-components';

function App() {
  
  const Div = styled.div`  
  margin: 20px;  
  border: 5px dashed green;  
  &:hover {  
  background-color: ${(props) => props.hoverColor};  
  }  
  `;  
const Title = styled.h1`  
  font-family: Arial;  
  font-size: 35px;  
  text-align: center;  
  color: palevioletred;  
  `;  
const Paragraph = styled.p`  
  font-size: 25px;  
  text-align: center;  
  background-Color: lightgreen;  
  `;  

 const Name = styled.h2`
  color: ${ (props)=>  props.mycolor } ;
  background-color:aqua
 `;


return <>
<Title>Styled Components Example</Title>  
  <p></p>  
  <Div hoverColor="Red">  
       <Paragraph>Hello JavaTpoint!!</Paragraph>  
  </Div>  

  <Name mycolor='pink'>this is Name tag having props for stylingg</Name>

  </>
}

export default App
