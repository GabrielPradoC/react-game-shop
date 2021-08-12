// Tentei colocar evento de clique para o teclado e deu errado
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styles from './Cart.module.css';
import Modal from '../../auxComponents/Modal/Modal';
import CartMenu from '../CartMenu/CartMenu';
import createImageUrl from '../../../auxFunctions/createImageUrl';

const Cart = ({ products, setCart }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((oldValue) => !oldValue);
  };

  const imagePath = createImageUrl('cart-icon.svg');

  return (
    <div className={styles['cart-body']}>
      <div onClick={toggleModal}>
        <img
          src={imagePath}
          alt="cart"
        />
      </div>
      {modal && (
        <Modal toggleModal={toggleModal}>
          <CartMenu
            products={products}
            setCart={setCart}
            toggleModal={toggleModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default Cart;
