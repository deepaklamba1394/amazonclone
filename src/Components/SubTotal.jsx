import React from "react";
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import { getBasketTotal } from "./Reducer";

function SubTotal()
{
    const [{basket}] = useStateValue();
    return <div className="subtotal">
       <CurrencyFormat renderText={(value) =>(
            <>
            <p>
                SubTotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" />This order contains gift.
            </small>
            </>


        )} 

        
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
        />
        <button className="subtotal_checkout">Proceed to Checkout</button>
    </div>;
}

export default SubTotal;