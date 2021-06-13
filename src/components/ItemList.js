import React,{useContext} from 'react';
import Item from "./Item";

import {GlobalContext} from "../context/GlobalContext";


const ItemList = () => {

    const {items,addCart} =useContext(GlobalContext);

    return (
        <div className="item-list">
        {items.map((item)=>{
              return <Item key={item.id} item={item} addCart={addCart} />
        })}
          
        </div>
    )
}

export default ItemList;