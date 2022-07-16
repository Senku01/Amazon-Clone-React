import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
//import {BrowserRouter as Rounter,Routes,Route,Link, Router} from 'react-router-dom'
function App() {
  return (
      <div className="App">
        <Header />
        <Cart />
        <Home />
          
      </div>
  );
}

export default App;
