import './App.css';
import { Route, Routes } from 'react-router-dom'

import Home from './Comp/Home'
import Category from './Comp/Category'
import ProductDetail from './Comp/ProductDetail'
import Cart from './Comp/Cart'
import Nav from './Comp/Nav'
import Delivery from './Comp/Delivery';
import Search from './Comp/Search';
import Payment from './Comp/Payment';
import Success from './Comp/Success';

import Footer from './Comp/Footer';

function App() {
  return (
    <div className="App">

      <Nav />

      <Routes> 
        <Route path="/" element={<Home />} />
       <Route path="/:category" element={<Category />} /> 
        <Route path="/:category/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/delivery" element={<Delivery />}/>
        <Route path="/payment" element={<Payment />} />
       <Route path="/success" element={<Success />} />
      </Routes>
   <Footer/>
    </div>
  );
}

export default App;