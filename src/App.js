import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Cart from './components/cart/cart';
import Home from './components/homePage/home';
import Product from './components/productCarousel/product';
import './App.scss';

function App() {
  return (
    <>   
    <Header/>
    {/* <Home/> */}
    {/* <Cart/> */}
    <Switch>
    <Route path='/home' component={Home} exact/> 
    <Route path='/home' component={Product} exact/> 

      <Route path='/cart' component={Cart} exact/>
       
    </Switch>
    <Product/>
     <Footer/>
   {/* <Route path='/footer' component={Footer} exact/>  */}
    </>
  );
}

export default App;
