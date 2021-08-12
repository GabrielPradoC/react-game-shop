// Tava dando conflito com o método Array.reduce
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

import React from 'react';
import formatPrice from '../../../auxFunctions/formatPrice';

const CartPrice = ({ items }) => {
  // Valor do frete por item no carrinho
  const shippingCostPerItem = 10.00;
  // Se o subtotal passar do valor dessa váriavel abaixo o frete sai de graça
  const minValueForFreeShipping = 250.00;

  const subTotal = items.reduce((total, item) => total += (item.price * item.quantity), 0);

  const cartItemCount = items.reduce((total, item) => total += +item.quantity, 0);

  const calculateShipping = () => {
    if (subTotal >= minValueForFreeShipping) {
      return 0.00;
    }
    const shippingCost = cartItemCount * shippingCostPerItem;
    return shippingCost;
  };

  const calculateTotal = () => {
    const shippingCost = calculateShipping();
    return formatPrice(subTotal + shippingCost);
  };

  return (
    <div>
      <span>
        Subtotal: R$
        {formatPrice(subTotal)}
      </span>
      <br />
      <span>
        Frete: R$
        {formatPrice(calculateShipping())}
      </span>
      <br />
      <span>
        Total: R$
        {calculateTotal()}
      </span>
    </div>
  );
};

export default CartPrice;
