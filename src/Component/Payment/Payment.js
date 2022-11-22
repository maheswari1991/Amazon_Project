import React, {useState, useEffect} from 'react';
import './Payment.css';
import { useStateValue} from '../../Reducer/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "../../Reducer/Reducer";
import axios from '../API_Request/axios';
import {useHistory} from 'react-router-dom';

export default function Payment() {

    const [{basket}, user] = useStateValue();
    const [disabled , setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [processing , setProcessing] = useState("");
    const [succeeded , setSucceeded] = useState("");
    const [clientSecret , setClientSecret] = useState(true);
    
    const stripe = useStripe();
    const elements = useElements();

    const history = useHistory();

    useEffect(() => {

        
        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

    }, [basket])

    const handleSubmit =async (e) =>{

        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        })
        .then(({ paymentIntent}) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false)
            history.replace('/orders')
        }) 

    }

    const handleChange =(e) =>{

        console.log('cpature the card payment event', e);
        setDisabled(e.empty);
        setError(e.error ? e.error.message: "");

    }


    return (
        <div className="payment">
          <div className="payment__container">
            <h1>Checkout (<Link to="checkout">{basket?.length}</Link>)</h1>

              {/* Payment Section - deliver address   */}
            <div className="payment__section">

                <div className="payment__title">
                    <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user ?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angles. ca</p>
                        </div>

            </div>
            {/* Paymeny section - review items */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map( item =>(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                            
                            />
                        ))}
                        </div>

            </div>
            {/* Payment section - Payment method */}
            <div className="payment__section">
                <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                            <form onSubmit={handleSubmit}>
                                 <CardElement onChange={handleChange}/>
                                 <div className="payment__priceContainer">
                                    <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    />

                                    <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>

                                 </div>

                                 {error && <div>{error}</div>}
                            </form>

                        </div>
            </div>

        </div>
        </div>
    )
}
