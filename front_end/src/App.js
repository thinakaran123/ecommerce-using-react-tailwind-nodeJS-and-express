import { useState } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Home from "./components/home";
import Productdetails from './components/productdetails';
import Products from "./components/products";
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cartpage from './components/cartpage';
function App() {
  const [cartitems,Setcartitems]=useState([])
  return (
   <Router>
    <div className='App'>
      <ToastContainer theme='light' position='top-center'/>
      <Header cartitems={cartitems}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/search" element={<Products  />}/>
        <Route path="/product/:id" element={<Productdetails cartitems={cartitems} Setcartitems={Setcartitems}/>}/>
        <Route path="/cart" element={<Cartpage cartitems={cartitems} Setcartitems={Setcartitems}/>}/>

      </Routes>
      <Footer/>
    </div>
   </Router>

  );
}

export default App;
