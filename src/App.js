import './App.css'
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <div>
         
        <Header/>
        <Routes>
          <Route path="/cart" element={<Cart />}>
          </Route> //This element is where we place our Thing 
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
        
      </div>
    </Router>
);
}

export default App;
