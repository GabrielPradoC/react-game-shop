import React from 'react';
import styles from './CartMenu.module.css';
import CartProduct from '../CartProduct/CartProduct';
import CartPrice from '../CartPrice/CartPrice';
import CloseButton from '../../auxComponents/CloseButton/CloseButton';

const CartMenu = ({ products, setCart, toggleModal }) => {
  const changeQuantity = (value, index) => {
    // Se dividir em mais de  uma linha da erro e se deixar em uma linha da erro
    // preferível deixar desativado
    // eslint-disable-next-line max-len
    const newCart = products.map((product, i) => (i === index ? { ...product, quantity: +value } : product));
    setCart([...newCart]);
  };

  const cartIsEmpty = products.length === 0;

  const localToggleModal = () => {
    toggleModal();
  };

  const removeFromCart = (itemIndex) => {
    const cartCopy = [...products];
    cartCopy.splice(itemIndex, 1);
    setCart([...cartCopy]);
  };

  const createCartProducts = () => products.map((product, index) => (
    <CartProduct
      key={product.id}
      product={product}
      itemIndex={index}
      changeQuantity={changeQuantity}
      removeFromCart={removeFromCart}
    />
  ));

  const finishBuy = () => {};

  return (
    <div className={styles['cart-modal-body']}>
      <div className={styles['cart-modal-items']}>
        {createCartProducts()}
        {cartIsEmpty && <h1>Carrinho vazio.</h1>}
      </div>
      <div className={styles['cart-modal-info']}>
        <div className={styles['cart-modal-location']}>
          <label htmlFor="cartAddressStreet">
            Endereço:
            <input type="text" id="cartAddressStreet" />
          </label>
          <label htmlFor="cartAddressCity">
            Cidade:
            <input type="text" id="cartAddressCity" />
          </label>
          <label htmlFor="cartAddressState">
            Estado:
            <input type="text" id="cartAddressState" />
          </label>
        </div>
        <div className={styles['cart-modal-pricing']}>
          <CartPrice items={products} />
        </div>
        <div className={styles['cart-modal-checkout']}>
          <input
            type="button"
            value="Comprar"
            className={styles['cart-modal-checkout-btn']}
            onClick={finishBuy}
          />
        </div>
      </div>
      <div className={styles['cart-modal-close']}>
        <CloseButton clickHandler={localToggleModal} />
      </div>
    </div>
  );
};

export default CartMenu;
