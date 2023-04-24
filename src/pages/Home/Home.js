import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom"

import axios from "axios";
import CardProduct from "../../components/CardProduct/CardProduct"
import { TextField, Button } from "@mui/material";
import Spinner from "../../components/Spinner/Spinner"
import { Domain } from "@mui/icons-material";
//FIREBASE
import { db } from "../../firebase/firebaseConfig"
import { collection, query, getDocs } from "firebase/firestore";


const Home = ({carrito, incrementar}) => {

    const [productos, setProductos] = useState([])
    const q = query(collection(db, "productos"))
    useEffect(() => {
      const vectorConCosas = []
      const getProductos = async () => {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          vectorConCosas.push({...doc.data(), id: doc.id })
        }); 
        console.log("Muestro el vector")
        console.log(vectorConCosas) 
        setProductos(vectorConCosas)
      };
      getProductos();
    }, []);

    return (
      <div className="grillaProductos">
          {productos.map((data) => {
          //  console.log("El producto enviado en Producto.js es " + producto.id)
            return(
              <div key={data.id}>
                <Link to={`/producto/${data.id}`}>
                  <CardProduct carrito={carrito} incrementar={incrementar} id={data.id} data={data}/>
                </Link>
              </div>  
            );                        
        })}
      </div>
);
}

export default Home