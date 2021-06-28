import './Cart.css';
import Modal from '../Modal/Modal';
import CartMenu from '../CartMenu/CartMenu';
import { useState } from 'react';

function Cart(props){

    const [modal, setModal] = useState(false);

    function toggleModal(){
        setModal((oldValue)=> !oldValue);
    }

    return (
        <div className='cart-body' >
            <img src={process.env.PUBLIC_URL+'/assets/cart-icon.svg'}
            alt='cart' onClick={toggleModal}
            />
            { modal && (
                <Modal toggleModal={toggleModal}>
                    <CartMenu 
                    products={props.products} 
                    setCart={props.setCart}
                    toggleModal={toggleModal}
                    />
                </Modal>
            )}
        </div>
    )
}

export default Cart;