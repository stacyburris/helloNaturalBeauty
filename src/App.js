import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Cart from './components/cart/cart';
import Home from './components/homePage/home';
import Quiz from './components/quiz/quiz';
import Product from './components/productCarousel/product';
import './App.scss';

function App() {
  return (
    <>   
    <Header/>
   
    {/* <Cart/> */}
    <Switch>
     {/* <Home/>   */}
    <Route exact path='/' /> 
    <Route path='/home' component={Home} exact/> 
    <Route path='/quiz' component={Quiz} exact/> 
    <Route path='/product' component={Product} exact/> 

    <Route path='/cart' component={Cart} exact/>
       
    </Switch>
  
     <Footer/>
   {/* <Route path='/footer' component={Footer} exact/>  */}
    </>
  );
}

export default App;
