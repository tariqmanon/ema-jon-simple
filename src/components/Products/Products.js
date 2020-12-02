import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './products.css'

const Products = (props) => {
    //console.log(props);
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h3>{name}</h3>
                <p><span>By: </span>{seller}</p>
                <p>${price}</p>
                <p><span>Only {stock}</span> left in stock - order soon</p>
                <button onClick={() => props.handleAddProducts(props.product)} className="btn-cart"><FontAwesomeIcon icon={faShoppingCart} /> add o cart</button>
            </div>
            
        </div>
    );
};

export default Products;