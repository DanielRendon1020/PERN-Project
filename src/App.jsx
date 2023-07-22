import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Reviews from './components/Reviews';
import './App.css';
import { CartProvider } from './contexts/CartContext';
import ContactInfo from './components/contactInfo';
import Cart from './components/cart';
import Shop from './components/shop';
import Home from './components/Home';
import Footer from './components/footer';
import { BsCart4 } from 'react-icons/bs';
import logo from './assets/logo.png';
import Congrats from './components/congrats';

function App() {
  return (
    <div className='App'>
      <div id='main-content'>
        <Router>
          <header>
            <ul id='navbar'>
              <li>
                <Link to='/home'>
                  <img id='logo' src={logo} alt='logo' />
                </Link>
              </li>
              <li>
                <Link to='/shop'>Shop</Link>
              </li>
              <li>
                <Link to='/contactInfo'>Contact Info</Link>
              </li>
              <li id='cart-icon'>
                <Link to='/cart'>
                  <BsCart4 />
                </Link>
              </li>
              <li>
                <Link to='/reviews'>Reviews</Link>
              </li>
            </ul>
          </header>
          <main>
            <CartProvider>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/contactInfo' element={<ContactInfo />} />
                <Route path='/congrats' element={<Congrats />} />
                <Route path='/reviews' element={<Reviews />} />
              </Routes>
            </CartProvider>
          </main>
        </Router>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
