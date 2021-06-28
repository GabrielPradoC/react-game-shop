import './CartMenu.css'
import CartProduct from '../CartProduct/CartProduct';
import CartPrice from '../CartPrice/CartPrice';
import CloseButton from '../CloseButton/CloseButton';

function CartMenu(props){

    function changeQuantity(value, index){
        const newCart = props.products.map((product, i)=>{
            return i === index ? {...product, quantity: +value}: product;
        });
        props.setCart([...newCart]);
    }

    const cartIsEmpty = props.products.length !== 0 ? false : true;

    function toggleModal(){
        props.toggleModal()
    }

    function removeFromCart(itemIndex){
        const cartCopy = [...props.products];
        cartCopy.splice(itemIndex, 1);
        props.setCart([...cartCopy]);
    }

    function createCartProducts(){
        return props.products.map((product, index)=>{
            return <CartProduct 
                key={product.id}
                product={product}
                itemIndex={index}
                changeQuantity={changeQuantity}
                removeFromCart={removeFromCart}
            />
        })
    }

    return (
        <div className='cart-modal-body'>
            <div className='cart-modal-items'>
                {createCartProducts()}
                {cartIsEmpty && <h1>Carrinho vazio.</h1>}
            </div>
            <div className='cart-modal-info'>
                <div className='cart-modal-pricing'>
                    <CartPrice items={props.products}/>
                </div>                           
                <div className='cart-modal-checkout'>
                    <input 
                    type='button' 
                    value='Comprar'
                    className='cart-modal-checkout-btn'
                    />
                </div>
            </div>
            <div className='cart-modal-close'>
                <CloseButton clickHandler={toggleModal} />
            </div>
        </div>
    )
}

export default CartMenu;