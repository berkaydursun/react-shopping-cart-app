import React, { createContext, useState, useEffect } from 'react'


export const GlobalContext = createContext();


const GlobalContextProvider = (props) => {
    const title = "BekShop";

    const [balance, setBalance] = useState(2000);
    const [items, setItems] = useState([
        {
            id: 1
            , i_name: "Mobile Phone"
            , i_photo: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155_small.jpg"
            , i_price: 500
        },
        {
            id: 2
            , i_name: "Mouse"
            , i_photo: "https://thermaltake.azureedge.net/pub/media/catalog/product/cache/e4fc6e308b66431a310dcd4dc0838059/l/2/l20m01.jpg"
            , i_price: 50
        },
        {
            id: 3
            , i_name: "Keyboard"
            , i_photo: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MLA22LL?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1496944005839"
            , i_price: 150
        },
        {
            id: 4
            , i_name: "Headphones"
            , i_photo: "https://images-na.ssl-images-amazon.com/images/I/41IhS6uR2PL._AC_SY780_.jpg"
            , i_price: 300
        },
        {
            id: 5
            , i_name: "Computer"
            , i_photo: "https://e-carpediem.com/wp-content/uploads/2020/04/izoly-m189-masa%C3%BCst%C3%BC-bilgisayar-i5.jpg"
            , i_price: 1000
        },
        {
            id: 6
            , i_name: "TV"
            , i_photo: "https://www.vestel.com.tr/ProductImages/LargeImagesNew/20275258_r1.jpg"
            , i_price: 2000
        }

    ])

    const initialState = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(initialState);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addCart = (item) => {
        const newCart = [...cart, item]
        setCart(newCart);
        console.log(newCart);
    }

    const buy = () =>{
        setBalance(balance - sum)
        setCart([]);
    }

    var sum = 0;
    cart.forEach(function (obj) {
        sum += obj.i_price;
    });

    const noLimit = () => {
        alert("There is no limit on your card");
        setCart([]);
    }


    return (
        <GlobalContext.Provider value={{ title, balance, setBalance, items, setItems, addCart, cart, setCart ,buy,noLimit,sum}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;