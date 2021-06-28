import './ProductList.css'
import Product from '../Product/Product';

function ProductList(props) {
    
    function createProducts(){
        return props.products.map(item => {
            return <Product 
                    item={item} 
                    key={item.id} 
                    modalToggle={props.modalToggle} 
                />;
        })
    }

    return (
        <div className='product-list'>
                {createProducts()}
        </div>
    );
}

export default ProductList;
