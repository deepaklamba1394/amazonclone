import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return <div className="checkout">
    <div className="checkoutLeft">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/LPAIndia/Header/170_AP_1500x300.jpg" className="checkout__image" alt=""></img>
        {basket?.length === 0 ? (
            <div><h1>Your shopping basket is empty</h1>
            <p>You have no items in your basket. To buy one or more click on "Add to basket" next to the item.</p>
            </div>
        ) : (<div><h2 className="checkout__title">Your shopping basket</h2>
        {basket.map(item => (<CheckoutProduct 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
        />))}
        </div>)}
        </div>
        {basket.length > 0 && (<div className="checkout__right"> 
        <SubTotal />
        </div>)}
    </div>;
}

export default Checkout;