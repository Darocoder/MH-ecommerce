import React, { useEffect, useState } from 'react';
import CardProduct from "../../components/CardProduct/CardProduct";
import axios from "axios";
import "./Productos.css";
import Producto from "../Producto/Producto";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { Contexto } from "../../App";

const Productos = ()  => {
  let p = useContext(Contexto)
  let productosTodos = p.productos
  let listaSinDuplicados = []

  productosTodos.forEach((producto) => {
    //Con ayuda de Eze, logro limpiar los duplicados.
    let yaEstaba=false
    listaSinDuplicados.forEach((sd) =>{
        if (sd.id === producto.id)
            yaEstaba = true
    })
    if (!yaEstaba)  {
        listaSinDuplicados.push(producto)
    }
})

    //console.log(productos)
  return (
        <div className="grillaProductos">
            {listaSinDuplicados.map((producto) => {
              return(
                <div key={producto.id}> 
                    <CardProduct key={producto.id} data={producto}/>
                </div>  
              );                        
          })}
        </div>
  );
};

export default Productos;

//<Link to={`/producto/${producto.id}`}>
//<CardProduct key={producto.id} data={producto}/>
//</Link>