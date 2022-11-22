 import React from 'react';
import { useStateValue } from '../../Reducer/StateProvider';
import './Product.css';

export default function Product({id,title, image, price, rating}) {

    const [{basket} , dispatch] = useStateValue();

    console.log('the basket value', basket)

const  addToBasket = () =>{
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating


        }
    })
}

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small><strong>$</strong></small>
                    <strong>{price}</strong>
                </p>
                    <div className="product__rating">
                        {Array(rating).fill().map((_, i) =>(
                                <p>⭐</p>

                        ))} 

            </div>
            </div>
            <img src={image} alt="" />
            <button className="product__button" onClick={addToBasket}>Add to Basket</button>
                </div>
            
        
    )
}
