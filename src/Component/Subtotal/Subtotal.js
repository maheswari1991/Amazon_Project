import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { StateProvider, useStateValue } from '../../Reducer/StateProvider';
import { useHistory } from 'react-router-dom';

export default function Subtotal() {
   
    const history = useHistory();
    const [{basket} , dispatch] = useStateValue();
    let totalPrice = basket.reduce(function(sum, baskets){
        console.log('the basket id & price', baskets.id + "***"+ baskets.price)
        return sum = sum + baskets.price;
    },0)

   
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                    <p>Subtotal ({basket.length} items): <strong>{totalPrice}</strong></p>
                    <small className="subtotal__gift">
                    <input type="checkbox" / >This order contains a gift
                    </small>

                    </>
                )}

                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            
            />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}
