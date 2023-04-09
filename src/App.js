import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//PAGES
import Home from "./pages/Home/Home"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import Productos from "./pages/Productos/Productos"
import ComoComprar from "./pages/ComoComprar/ComoComprar"
import Historia from "./pages/Historia/Historia"
import Contacto from "./pages/Contacto/Contacto"


//Api  https://fakestoreapi.com/products/

//Renderizado de DOM
const App = () => {
      return (
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home />}/>
            <Route path="*" element={<ErrorPage />}/>
            <Route path="productos" element={<Productos />}/>
            <Route path="como-comprar" element={<ComoComprar />}/>
            <Route path="historia" element={<Historia />}/>
            <Route path="contacto" element={<Contacto />}/>
            
          </Routes>
        </BrowserRouter>
      );
  };


export default App;
