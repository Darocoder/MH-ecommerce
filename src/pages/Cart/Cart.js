import React, { useEffect, useState } from 'react';
import CardProduct from "../../components/CardProduct/CardProduct";
import axios from "axios";
import "./Cart.css";
import { Link, useParams } from "react-router-dom"
import { useContext } from 'react';
import { Contexto } from "../../App";
import CartForm from "../../components/CartForm/CartForm"

const Cart = ()  => {

const contexto = useContext(Contexto)
const contenidoCarrito = contexto.carrito
console.log("Contenido Del Carrito:", contenidoCarrito)

    
  return (
    <div>
      <div>
        <CartForm />
      </div>
    
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
      <div className="cantidad">
        <span value="cantidad">Productos agregados: {contexto.carrito.length}</span>
      </div>
  </div>
      );                        
}


export default Cart;