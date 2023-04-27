import React, { useEffect, useState } from 'react';
import CardProduct from "../../components/CardProduct/CardProduct";
import axios from "axios";
import "./Producto.css";
import { Link, useParams } from "react-router-dom"

import { useContext } from "react";
import { Contexto } from "../../App";

const Producto = ()  => {
    let p = useContext(Contexto)
    let productosTodos = p.productos
    let {id} = useParams();
    console.log("buscando el id " + id)
    console.log("en " , productosTodos)
    
    let miProducto
    productosTodos.forEach((producto) => {
        if (producto.id === id){
            miProducto = producto;
        }
    })
console.log(miProducto)
    
    //console.log(producto)
    return (
        <div className="Producto">               
            <CardProduct key={miProducto.id} data={miProducto}/>               
        </div>  
        );                        
}


export default Producto;