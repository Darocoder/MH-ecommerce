import React from 'react'
import "./Header.css"
import img from "../Header/logo.webp"

const Header = ({variable}) => {
    return (
        <div className="Header">
            <h1>{variable}</h1>
            <h3>La tienda online del herraje</h3>
            <img src= {img} alt="Logo ecommerce"></img>
        </div>
    );
};

export default Header;