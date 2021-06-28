import './Product.css'

function Product(props){

    function showModal(){
        props.modalToggle(props.item);
    }

    return (
        <div className='product-body' onClick={showModal}>
            <div className='product-image'> 
                <img src={`${process.env.PUBLIC_URL}/assets/${props.item.image}`} 
                alt={props.item.name} />
            </div>
            <div className='product-info'>
                <span className='product-title'>{props.item.name}</span>
                <br/>
                <span className='product-price'>R${props.item.price}</span>
            </div>
        </div>
    )
}

export default Product;