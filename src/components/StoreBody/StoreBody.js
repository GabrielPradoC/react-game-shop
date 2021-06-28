import './StoreBody.css';
import { useState } from 'react';
import Sorter from '../Sorter/Sorter';
import ProductList from '../ProductList/ProductList';
import Modal from '../Modal/Modal';
import AddToCartMenu from '../AddToCartMenu/AddToCartMenu';

function StoreBody(props) {

    const [clickedItem, setClickedItem] = useState({});
    const [sortOption, setSortOption] = useState('price');
    const [modal, setModal] = useState(false);

    const products = [...props.products];
    switch (sortOption) {
        case 'price':
            products.sort(sortPrice);
            break;
        case 'score':
            products.sort(sortScore);
            break;
        case 'title':
            products.sort(sortTitle);
            break;
        default:
            products.sort(sortPrice);
            break;
    }

    function toggleModalClickedItem(targetItem){
        toggleModal();
        setClickedItem(targetItem);
      }
    

    function toggleModal() {
        setModal(oldValue => !oldValue);
    }

    function sortScore(item1, item2) {
        return item1.score - item2.score;
    }

    function sortTitle(item1, item2) {
        return item1.name.localeCompare(item2.name);
    }

    function sortPrice(item1, item2) {
        return item2.price - item1.price;
    }

    function addToCart(item){
        if(props.cart.find(product => product.id === item.id)){
          const index = props.cart.findIndex(product => product.id === item.id);
          const cartCopy = [...props.cart];
          cartCopy[index].quantity++;
          props.setCart([...cartCopy])
        }else{
          const newItem = {...item, quantity: 1}
          props.setCart((oldCart)=> [...oldCart, newItem]);
        }    
      }

    return (
        <div className='store-body'>
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
            <ProductList products={products} 
            modalToggle={toggleModalClickedItem} />
        </div>
    );
}

export default StoreBody;
