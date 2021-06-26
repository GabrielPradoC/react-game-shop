import './Product.css'

function Product(props){
    return (
        <div className='product-body'>
            <div className='product-image'> 
                <img src={`${process.env.PUBLIC_URL}/assets/${props.item.image}`} alt={props.item.title}>
                </img>
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