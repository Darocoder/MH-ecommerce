import React from 'react'
import "./Header.css"
import img from "../Header/logo.webp"
import { Link } from "react-router-dom"

const Header = ({variable}) => {
    return (
        <div className="Header">
            <h1>{variable}</h1>
            <h3>La tienda online del herraje</h3>
            <Link to="/">
                <img src= {img} alt="Logo ecommerce"></img>
            </Link>
            
        </div>
    );
};

export default Header;