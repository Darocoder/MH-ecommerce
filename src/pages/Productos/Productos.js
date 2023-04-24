import React, { useEffect, useState } from 'react';
import CardProduct from "../../components/CardProduct/CardProduct";
import axios from "axios";
import "./Productos.css";
import Producto from "../Producto/Producto";
import { Link } from "react-router-dom"

const Productos = ()  => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        axios("https://fakestoreapi.com/products/").then((res) =>
        setProductos(res.data)
        );
    },[]);
    //console.log(productos)
  return (
        <div className="grillaProductos">
            {productos.map((producto) => {
            //  console.log("El producto enviado en Producto.js es " + producto.id)
              return(
                <div key={producto.id}>
                  <Link to={`/producto/${producto.id}`}>
                    <CardProduct key={producto.id} data={producto}/>
                  </Link>
                </div>  
              );                        
          })}
        </div>
  );
};

export default Productos;

