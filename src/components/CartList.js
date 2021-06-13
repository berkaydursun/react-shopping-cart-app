import React, { useContext } from 'react';
import CartItem from './CartItem'
import { GlobalContext } from "../context/GlobalContext";
const CartList = () => {

    const { cart,buy,sum,noLimit,balance } = useContext(GlobalContext);

    return (
        <div className="cart-area">
            {cart.map(c => (

                <CartItem key={c.id} item={c} />

            ))}
            <h2>Total : {sum}</h2>
            <button onClick={() => sum <= balance ? buy() : noLimit()}>Buy Now</button>
        </div>
    )
}

export default CartList;