import About from "./About"
import Home from "./Home"
import Service from "./Service"
import Error from "./Error"
import { BrowserRouter, Route, Routes , Link} from "react-router-dom"
import Login from "./Login"

function App() {
  

  return (
    <>

      <BrowserRouter>
          <center>
                <Link  style={{margin:"0px 5px"}}  to="/" >Home</Link>
                <Link  style={{margin:"0px 5px"}}  to="/about" >AboutUs</Link>
                <Link  style={{margin:"0px 5px"}}  to="/service" >Service</Link>
                <Link to="*"  className="btn btn-danger" >Error</Link>
                <Link to="/login" >Login</Link>



          </center>




        <Routes>

            <Route exact path="/" element={<Home/>}></Route>
            <Route  path="/about" element={<About/>}></Route>
            <Route  path="/service" element={<Service/>}></Route>
            <Route  path="*" element={<Error/>}></Route>
            <Route  path="/login" element={<Login/>} ></Route>


        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
