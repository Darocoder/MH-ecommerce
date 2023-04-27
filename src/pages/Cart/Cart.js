import React, { useEffect, useState } from 'react';
import CardProduct from "../../components/CardProduct/CardProduct";
import axios from "axios";
import "./Cart.css";
import { Link, useParams } from "react-router-dom"
import { useContext } from 'react';
import { Contexto } from "../../App";

const Cart = ()  => {

const contexto = useContext(Contexto)
const contenidoCarrito = contexto.carrito
console.log("Contenido Del Carrito:", contenidoCarrito)

    
    return (
        <div className="grillaProductos">
          {contenidoCarrito.map((data) => {
          
            return(
              <div key={data.id}>
                <Link to={`/producto/${data.id}`}>
                  <CardProduct id={data.id} data={data}/>
                </Link>
              </div>  
            );                        
        })}
      </div>
        );                        
}


export default Cart;