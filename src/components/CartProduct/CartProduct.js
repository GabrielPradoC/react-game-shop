import './CartProduct.css';

function CartProduct(props){

    function inputChangeHandler(event){
        props.changeQuantity(event.target.value, props.itemIndex);
    }

    function removeBtnClickHandler(){
        props.removeFromCart(props.itemIndex);
    }

    return (
        <div className='cart-product-body'>
            <div className='cart-product-remove-btn' onClick={removeBtnClickHandler}>
                    <span>-</span>
            </div>
            <div className='cart-product-image'>
                <img className='cart-product-img' 
                src={process.env.PUBLIC_URL+'/assets/'+props.product.image} 
                alt={props.product.name} />
            </div>
            <div className='cart-product-title'>
                <span>{props.product.name}</span>
            </div>
            <div className='cart-product-quantity'>
                <span>X</span>
                <input type='number' min='1' 
                value={props.product.quantity} 
                onChange={inputChangeHandler}/>
            </div>
        </div>
    )
}


export default CartProduct;