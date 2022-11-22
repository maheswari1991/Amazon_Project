import React from 'react'
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import {useStateValue} from '../../Reducer/StateProvider';
import FlipMove from 'react-flip-move';




export default function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();


    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                className="checkout__add" 
                alt="" 
                />

                <div>
                <h2 className="checkout__title">Your shopping Basket</h2>
                {/* <FlipMove> */}
                {basket.map( item => (

                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    />


                ))}
                {/* </FlipMove> */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}
