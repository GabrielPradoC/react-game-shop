// Tinha tentado colocar evento por tecla pressionada no teclado e deu errado
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from './Product.module.css';
import formatPrice from '../../../auxFunctions/formatPrice';
import createImageUrl from '../../../auxFunctions/createImageUrl';

const Product = ({ item, modalToggle }) => {
  const showModal = () => {
    modalToggle(item);
  };

  const formattedPrice = formatPrice(item.price);
  const imagePath = createImageUrl(item.image);

  return (
    <div
      className={styles['product-body']}
      onClick={showModal}
    >
      <div>
        <img
          src={imagePath}
          alt={item.name}
        />
      </div>
      <div>
        <span className={styles['product-title']}>{item.name}</span>
        <br />
        <span className={styles['product-price']}>
          R$
          {formattedPrice.replace('.', ',')}
        </span>
      </div>
    </div>
  );
};

export default Product;
