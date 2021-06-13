import React from 'react'

const Item = ({item,addCart}) => {
    return (
        <div className="item-box">
            <div className="item-image-box">
            <img src={item.i_photo} alt={"myItem"}></img>
            </div>
            <div className="item-info-box">
                <h4>{item.i_name}</h4>
            </div>
            <div className="item-price-box"><span className="money">$ {item.i_price}</span></div>
           <button onClick={(e)=>(addCart(item))}>Add Cart</button>

        </div>
    )
}
export default Item;