import React from 'react';
import styles from './ProductList.module.css';
import Product from '../Product/Product';

const ProductList = ({ products, modalToggle }) => {
  const createProducts = () => products.map((item) => (
    <Product
      item={item}
      key={item.id}
      modalToggle={modalToggle}
    />
  ));

  return (
    <div className={styles['product-list']}>
      {createProducts()}
    </div>
  );
};

export default ProductList;
