import React from "react";
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


//Api  https://fakestoreapi.com/products/

//Renderizado de DOM
const App = () => {
      return (
        <BrowserRouter>

        <div>
          <Header variable="Mercado Herrajes"/>
          <Nav />
        </div>

          <Routes>

            <Route path="/" element={<Productos />}/>
            <Route path="*" element={<ErrorPage />}/>
            <Route path="productos" element={<Productos />}/>
            <Route path="/producto/:id" element={<Producto />}/>
            <Route path="como-comprar" element={<ComoComprar />}/>
            <Route path="historia" element={<Historia />}/>
            <Route path="contacto" element={<Contacto />}/>
            
          </Routes>
        </BrowserRouter>
      );
  };


export default App;
