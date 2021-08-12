// Eu tinha tentado colocar key event só que deu MUITO errado
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import createImageUrl from '../../../auxFunctions/createImageUrl';
import styles from './CartProduct.module.css';

const CartProduct = ({
  changeQuantity, product, itemIndex, removeFromCart,
}) => {
  const imagePath = createImageUrl(product.image);

  const inputChangeHandler = (event) => {
    changeQuantity(event.target.value, itemIndex);
  };

  const removeBtnClickHandler = () => {
    removeFromCart(itemIndex);
  };

  return (
    <div className={styles['cart-product-body']}>
      <div
        className={styles['cart-product-remove-btn']}
        onClick={removeBtnClickHandler}
      >
        <span>-</span>
      </div>
      <div className={styles['cart-product-image']}>
        <img
          src={imagePath}
          alt={product.name}
        />
      </div>
      <div className={styles['cart-product-title']}>
        <span>{product.name}</span>
      </div>
      <div className={styles['cart-product-quantity']}>
        <span>X</span>
        <input
          type="number"
          min="1"
          value={product.quantity}
          onChange={inputChangeHandler}
        />
      </div>
    </div>
  );
};

export default CartProduct;
