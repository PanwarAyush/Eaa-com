import Home from './pages/home';
import React from 'react'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Product from './pages/Product'
import ProductList from './pages/ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route exact path="/Register" element={<Register/>}/>
      </Routes>
      <Routes>
        <Route exact path="/Cart" element={<Cart/>}/>
      </Routes>
      <Routes>
        <Route exact path="/Login" element={<Login/>}/>
      </Routes>
      <Routes>
        <Route exact path="/Product" element={<Product/>}/>
      </Routes>
      <Routes>
        <Route exact path="/ProductList" element={<ProductList/>}/>
      </Routes>
    </Router>
  );
};

export default App;