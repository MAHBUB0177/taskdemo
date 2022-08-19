import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
 } from "react-router-dom";
import { Navbar } from './page/Navbar';
import ProductCreate from './page/ProductCreate';
import ProductList from './page/ProductList';


function App() {
  return (
    <div className="wrapper">
    <Router>
    <Navbar/>
    <br></br>
    <Routes>
     <Route path="/"  />
     <Route path="/create" element={<ProductCreate/>} />
     <Route path="/list" element={<ProductList/>} />
     

  
    </Routes>
  
   </Router>
    </div>
  );
}

export default App;
