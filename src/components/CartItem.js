import React from 'react'

const CartItem = ({item}) => {
    return (
        <>
        <div className="item-info">
            <h2>{item.i_name} : ${item.i_price}</h2>
        </div>
      

        </>
    )
}

export default CartItem;