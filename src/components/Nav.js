import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";


const Nav = () => {
    const { title, balance } = useContext(GlobalContext);

    return (
        <div className="container">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h2 className="logo">{title}</h2>
            </Link>

            <ul>
                <li><Link to="/about" style={{textDecoration:'none',color:"black"}}>
                    About
                </Link></li>
                <li>Balance : <span className="money">${balance}</span></li>
            </ul>
        </div>
    )
}


export default Nav;