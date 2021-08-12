import React from 'react';
import styles from './Navbar.module.css';
import Cart from '../Cart/Cart';

const Navbar = ({ products, setCart }) => (
  <div className={styles['navbar-body']}>
    <Cart products={products} setCart={setCart} />
  </div>
);

export default Navbar;
