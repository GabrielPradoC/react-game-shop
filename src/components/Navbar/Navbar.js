import './Navbar.css';
import Cart from '../Cart/Cart';

function Navbar(props) {
    return (
        <div className='navbar-body'>
            <Cart products={props.products} setCart={props.setCart}/>
        </div>
    );
}

export default Navbar;
