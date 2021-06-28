import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import StoreBody from './components/StoreBody/StoreBody';
const products = require('./products.json');

function App() {

  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Navbar products={cart} setCart={setCart}/>
      <StoreBody products={products} 
      cart={cart}
      setCart={setCart}/>
    </div>
  );
}

export default App;
