import React, { useState } from 'react';
import styles from './StoreBody.module.css';
import Sorter from '../Sorter/Sorter';
import ProductList from '../ProductList/ProductList';
import Modal from '../../auxComponents/Modal/Modal';
import AddToCartMenu from '../AddToCartMenu/AddToCartMenu';
import sortFunc from '../../../auxFunctions/sortFunc';

const StoreBody = ({ products, cart, setCart }) => {
  const [clickedItem, setClickedItem] = useState({});
  const [sortOption, setSortOption] = useState('price');
  const [modal, setModal] = useState(false);

  const localProducts = sortFunc(sortOption, products);

  const toggleModal = () => {
    setModal((oldValue) => !oldValue);
  };

  const toggleModalClickedItem = (targetItem) => {
    toggleModal();
    setClickedItem(targetItem);
  };

  const addToCart = (item) => {
    if (cart.find((product) => product.id === item.id)) {
      const index = cart.findIndex((product) => product.id === item.id);
      const cartCopy = [...cart];
      cartCopy[index].quantity += 1;
      setCart([...cartCopy]);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCart((oldCart) => [...oldCart, newItem]);
    }
  };

  return (
    <div>
      <div className={styles['store-body']}>
        <Sorter setSortOption={setSortOption} sortOption={sortOption} />
        {modal && (
          <Modal toggleModal={toggleModal}>
            <AddToCartMenu
              toggleModal={toggleModal}
              clickedItem={clickedItem}
              addToCart={addToCart}
            />
          </Modal>
        )}
        <ProductList
          products={localProducts}
          modalToggle={toggleModalClickedItem}
        />
      </div>
    </div>
  );
};

export default StoreBody;
