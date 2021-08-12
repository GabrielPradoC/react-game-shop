import React, { useState } from 'react';
import styles from './App.module.css';
import Navbar from './components/navbar/Navbar/Navbar';
import StoreBody from './components/body/StoreBody/StoreBody';

const products = require('./products.json');

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className={styles.App}>
      <Navbar products={cart} setCart={setCart} />
      <StoreBody products={products} cart={cart} setCart={setCart} />
    </div>
  );
};

export default App;
