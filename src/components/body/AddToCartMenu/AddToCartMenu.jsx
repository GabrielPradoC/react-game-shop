import React from 'react';
import styles from './AddToCartMenu.module.css';
import CloseButton from '../../auxComponents/CloseButton/CloseButton';
import formatPrice from '../../../auxFunctions/formatPrice';
import createImageUrl from '../../../auxFunctions/createImageUrl';

const AddToCartMenu = ({ clickedItem, toggleModal, addToCart }) => {
  const localAddToCart = () => {
    toggleModal();
    addToCart(clickedItem);
  };

  const formattedPrice = formatPrice(clickedItem.price);
  const imagePath = createImageUrl(clickedItem.image);

  return (
    <div className={styles['buy-item-body']}>
      <div className={styles['buy-item-body-inner']}>
        <div className={styles['buy-item-image']}>
          <img src={imagePath} alt={clickedItem.name} />
          <span>{clickedItem.name}</span>
        </div>
        <div className={styles['buy-item-info']}>
          <div className={styles['buy-item-price']}>
            <span>
              Preço: R$
              {formattedPrice}
            </span>
            <br />
            <input type="button" value="Comprar" onClick={localAddToCart} />
          </div>
        </div>
      </div>
      <div className={styles['buy-item-close-div']}>
        <CloseButton clickHandler={toggleModal} />
      </div>
    </div>
  );
};

export default AddToCartMenu;
