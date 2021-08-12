import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ children, toggleModal }) => (
  <div>
    {children}
    <Backdrop toggleModal={toggleModal} />
  </div>
);

export default Modal;
