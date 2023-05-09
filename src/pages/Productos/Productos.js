import React from 'react';
import CardProduct from "../../components/CardProduct/CardProduct";
import "./Productos.css";
import { useContext } from "react";
import { Contexto } from "../../App";


const Productos = ()  => {
  let p = useContext(Contexto)
  let productosTodos = p.productos

  return (
        <div className="grillaProductos">
            {productosTodos.map((producto) => {
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