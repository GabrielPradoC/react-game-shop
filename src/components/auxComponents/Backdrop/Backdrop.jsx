// Eu tinha tentado colocar key event só que deu MUITO errado
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Não tem necessidade de colocar label nessa div
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = ({ toggleModal }) => {
  const removeBackdrop = () => {
    toggleModal();
  };

  return (
    <div
      className={styles['backdrop-body']}
      onClick={removeBackdrop}
    />
  );
};

export default Backdrop;
