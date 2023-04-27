import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Shop.css";
import { useEffect, useState } from 'react';
import { useContext } from "react";
import { Contexto } from "../../App";


const Shop = () => {

    const contexto = useContext(Contexto)
    console.log("la cantidad del carrito es", contexto.carrito.length) 
/*
    useEffect(() => {
        // Update the document title using the browser API
        console.log("Estoy en el useEffect que quiero que corra");
    },[contexto.carrito]);
*/

    return(
        <div className="Carrito" style={{ display: "flex" }}>
            <ShoppingCartIcon sx={{ color: "green" }}/>
            <span className="Cantidad-carrito">{contexto.carrito.length}</span> 

        </div>
    );
};
export default Shop;   

//            <span><button onClick={contexto.vaciarCarrito}>Reiniciar compra </button> </span> 
