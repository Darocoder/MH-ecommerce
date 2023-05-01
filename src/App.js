import { React, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


//FIREBASE
import { db } from "./firebase/firebaseConfig"
import { collection, query, getDocs, where } from "firebase/firestore";
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
 
      if (!carrito.some(prod => prod === nuevo) ){
        setCarrito(prev => [...prev, nuevo])
      }else{
        alert("Todavía no soportamos artículos repetidos, disculpe!")
      }
  }


  const vaciarCarrito = () => {
    setCarrito([])
}

  const docs = [];
  const q = query(collection(db, "productos"));//, where("categoria", "==", "Tornillos"));

  useEffect(() => {
    const getProductos = async() => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
          docs.push( {...doc.data(), id: doc.id} );
      });
     // console.log("docs", docs)
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
