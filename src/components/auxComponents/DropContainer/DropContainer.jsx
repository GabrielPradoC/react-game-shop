import React from 'react';
// import styles from './DropContainer.module.css';

const DropContainer = ({ cart }) => {
  const totalItems = cart.reduce((total, currentItem) => total + currentItem.quantity, 0);
  return (
    <div>
      <h1>{totalItems}</h1>
    </div>
  );
};

export default DropContainer;
