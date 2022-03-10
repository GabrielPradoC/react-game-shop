import React, { useState } from 'react';
import styles from './App.module.css';
import Navbar from './components/navbar/Navbar/Navbar';
import StoreBody from './components/body/StoreBody/StoreBody';
import NotificationBox from './components/auxComponents/NotificationBox/NotificationBox';

const products = require('./products.json');

const App = () => {
  const [cart, setCart] = useState([]);
  const [notifications, setNotifications] = useState([]);

  return (
    <div className={styles.App}>
      <Navbar products={cart} setCart={setCart} />
      <NotificationBox notifications={notifications} setNotifications={setNotifications} />
      <StoreBody
        products={products}
        cart={cart}
        setCart={setCart}
        setNotifications={setNotifications}
      />
    </div>
  );
};

export default App;
