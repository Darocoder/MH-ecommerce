import { React, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


//FIREBASE
import { db } from "./firebase/firebaseConfig"
import { collection, query, getDocs } from "firebase/firestore";
import { createContext } from "react";

//COMPONENTES
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"

//PAGES
import Home from "./pages/Home/Home"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import Productos from "./pages/Productos/Productos"
import ComoComprar from "./pages/ComoComprar/ComoComprar"
import Historia from "./pages/Historia/Historia"
import Contacto from "./pages/Contacto/Contacto"
import Producto from "./pages/Producto/Producto"
import Cart from "./pages/Cart/Cart"
import Categorias from "./pages/Categorias/Categorias"
//import { getPopoverUtilityClass } from "@mui/material";

//Contexto de Carrito
export const Contexto = createContext("Contexto inicial")

//Renderizado de DOM
const App = () => {

  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (nuevo) => {
    console.log("Agregando al carrito", nuevo)
      nuevo.cantidadCarrito++;
      if (!carrito.some(prod => prod.id === nuevo.id) ){
        setCarrito(prev => [...prev, nuevo,])
      }
      console.log("CAntida de " +  nuevo.producto +  ": " + nuevo.cantidadCarrito)
  }

function vaciarCarrito(){
  carrito.forEach((data) => {      
    data.cantidadCarrito = 0 
  })
  setCarrito([])
}

  const docs = [];
  const q = query(collection(db, "productos"));//, where("categoria", "==", "Tornillos"));

  useEffect(() => {
    const getProductos = async() => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let producto = {...doc.data(), id: doc.id, cantidadCarrito:0} 
        if (!docs.some(producto => producto.id === doc.id)) //si el producto no esta en el array, lo agrego (asi evito duplicados)
          docs.push(producto);
      });
      
      setProductos(docs)
      console.log("productos: " , productos)
    };
    getProductos();
  }, []);

  
      return (
        <Contexto.Provider value={     {productos, setProductos, carrito, agregarAlCarrito, vaciarCarrito}    }>
          <BrowserRouter>

          <div>
            <Header variable="Mercado Herrajes"/>
            <Nav />
          </div>

            <Routes>

              <Route path="/" element={<Home />}/>
              <Route path="*" element={<ErrorPage />}/>
              <Route path="productos" element={<Productos />}/>
              <Route path="/producto/:id" element={<Producto />}/>
              <Route path="como-comprar" element={<ComoComprar />}/>
              <Route path="historia" element={<Historia />}/>
              <Route path="contacto" element={<Contacto />}/>
              <Route path="cart" element={<Cart />}/>
              <Route path="/categoria/:categoria" element={<Categorias />}/>
              
            </Routes>
          </BrowserRouter>
          </Contexto.Provider>
      );
  };


export default App;
