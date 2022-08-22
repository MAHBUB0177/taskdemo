import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
 } from "react-router-dom";
import BasicExample, { Navbar } from './page/Navbar';
import ProductCreate from './page/ProductCreate';
import ProductList from './page/ProductList';
import Footer from './page/Footer';


function App() {
  return (
    <div className="wrapper">
    <Router>
    {/* <Navbar/> */}
    <BasicExample/>
    <br></br>
    <Routes>
     <Route path="/"  />
     <Route path="/create" element={<ProductCreate/>} />
     <Route path="/list" element={<ProductList/>} />
     

  
    </Routes>
  {/* <Footer/> */}
   </Router>
    </div>
  );
}

export default App;
