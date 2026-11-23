
import HocExample from './HocExample'
import EmployeeListComponent from './EmployeeListComponent'
import ProductListComponent from './ProductListComponent';




const    empList = [

        {id:101,ename:"King",salary:90000},
        {id:102,ename:"Smith",salary:50000},
        {id:103,ename:"Ford",salary:60000},
        {id:104,ename:"Tarun",salary:70000},
        {id:105,ename:"Kummu",salary:80000}







];


const productList = [

        {id:21,pname:"Laptop",price:5000},
        {id:22,pname:"Mobile",price:25000},
        {id:23,pname:"Charger",price:3000},
        {id:24,pname:"Mouse",price:800}

];


       const Employees =         HocExample(EmployeeListComponent , empList);


        const Products = HocExample(ProductListComponent,productList);
 


function App() {

  

  return (
    <>

    <h1>App Component</h1>

    <Employees></Employees>

    <Products></Products>
    
    </>
  )
}

export default App
