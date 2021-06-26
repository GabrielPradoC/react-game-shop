import './ProductList.css'
import Product from './Product';
import { useState } from 'react';
import Filter from './Filter';

function ProductList(props) {
    const [filterOption , setFilterOption] = useState('price');

    const filteredProducts = props.products;
    switch(filterOption){
        case 'price':
            filteredProducts.sort(sortPrice);
            break;
        case 'score':
            filteredProducts.sort(sortScore)
            break;
        case 'title':
            filteredProducts.sort(sortTitle)
            break;
        default:
            break;
    }

    function sortScore(item1, item2){
        return item1.score - item2.score;
    }

    function sortTitle(item1, item2){
        return item1.name.localeCompare(item2.name)
    }

    function sortPrice(item1, item2){
        return item1.price - item2.price;
    }

    return (
        <div className='product-list'>
            <Filter onSelectChange={setFilterOption} defaultValue={filterOption}/>
            <div className='product-list-items'>
                {props.products.map(game => {
                return <Product item={game} key={game.id} />;
            })}
            </div>            
        </div>
    );
}

export default ProductList;
