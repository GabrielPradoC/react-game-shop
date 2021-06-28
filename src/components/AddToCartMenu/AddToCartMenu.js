import './AddToCartMenu.css';
import CloseButton from '../CloseButton/CloseButton';

function AddToCartMenu(props){

    function addToCart(){
        props.toggleModal();
        props.addToCart(props.clickedItem)
    }

    return (
        <div className='buy-item-body'>
                <div className='buy-item-image'>
                    <img src={`${process.env.PUBLIC_URL}/assets/${props.clickedItem.image}`} 
                    alt={props.clickedItem.name} 
                    />
                    <span>{props.clickedItem.name}</span>
                </div>
                <div className='buy-item-info'>
                    <div className='buy-item-price'>
                        <span>Preço: R${props.clickedItem.price}</span>
                        <br/>
                        <input type='button'
                            value='Comprar' 
                            onClick={addToCart}
                        />
                    </div>
                </div>
                <div className='buy-item-close-div'>
                    <CloseButton clickHandler={props.toggleModal} />
                </div>
        </div>
    )
}

export default AddToCartMenu;