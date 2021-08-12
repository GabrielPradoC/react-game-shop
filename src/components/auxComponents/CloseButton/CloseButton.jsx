import React from 'react';
import styles from './CloseButton.module.css';

const CloseButton = ({ clickHandler, className }) => {
  const localClickHandler = () => {
    clickHandler();
  };

  const additionalClasses = className || '';

  return (
    <input
      className={`${styles['close-button']} ${additionalClasses}`}
      type="button"
      value="X"
      onClick={localClickHandler}
      data-testid="close-btn"
    />
  );
};

export default CloseButton;
