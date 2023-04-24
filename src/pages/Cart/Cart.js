import React, { useEffect, useState } from 'react';
import CardProduct from "../../components/CardProduct/CardProduct";
import axios from "axios";
import "./Cart.css";
import { Link, useParams } from "react-router-dom"

const Cart = ()  => {
    const [producto, setProducto] = useState({})

    let {id} = useParams();


    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`).then((res) =>
        setProducto(res.data)
        );
    },[id]);
    //console.log(producto)
    return (
        <div className="Producto">               
            <CardProduct data={producto}/>               
        </div>  
        );                        
}


export default Cart;