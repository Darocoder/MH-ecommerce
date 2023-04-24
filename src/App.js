import { React, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


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


//Api  https://fakestoreapi.com/products/

//Renderizado de DOM
const App = () => {

  const [carrito, setCarrito] = useState(0)

  function incrementar(){
    setCarrito(carrito+5)
    console.log("incrementando: "+ carrito)
  }
  
   

      return (
        <BrowserRouter>

        <div>
          <Header variable="Mercado Herrajes"/>
          <Nav />
        </div>

          <Routes>

            <Route path="/" carrito={carrito} incrementar={incrementar} element={<Home />}/>
            <Route path="*" element={<ErrorPage />}/>
            <Route path="productos" element={<Productos />}/>
            <Route path="/producto/:id" carrito={carrito}  incrementar={incrementar} element={<Producto />}/>
            <Route path="como-comprar" element={<ComoComprar />}/>
            <Route path="historia" element={<Historia />}/>
            <Route path="contacto" element={<Contacto />}/>
            <Route path="cart" element={<Cart />}/>
            
          </Routes>
        </BrowserRouter>
      );
  };


export default App;
