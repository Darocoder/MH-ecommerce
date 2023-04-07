import React, { Component, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//COMPONENTS
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav"
import CardProduct from "./components/CardProduct/CardProduct"
import ErrorPage from "./components/ErrorPage/ErrorPage"
import { TextField, Button } from "@mui/material";
import Spinner from "./components/Spinner/Spinner"
import { Domain } from "@mui/icons-material";

//Api  https://fakestoreapi.com/products/

//Renderizado de DOM
const App = () => {

      const [value, setValue] = useState("");
      const [data, setData] = useState({});
      const [isLoading, setIsLoading] = useState(false)


      const onChange = (event) => {
        //console.log(event.target.value);
        setValue(event.target.value);
      };

      const onSubmit = (e) => {
        setIsLoading(true)
        e.preventDefault()
        //console.log(value)
        const userImput = value.toLowerCase().replace(/ /g, ""); //limpia la variable de espacio y mayus.
        console.log(userImput);
        if(userImput) {
          axios(`https://fakestoreapi.com/products/${userImput}`).then((res) =>
            setData(res.data)
          );
        }
        setTimeout(() => {
          setIsLoading(false)
        },800)
        
        setValue("");//limpia lo escrito en el textField
      };
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <div className="App">

                <Header variable="Mercado Herrajes"/>

                <Nav />

                <form ClassName="Form" onSubmit={onSubmit}>
                  <TextField 
                    placeholder="Buscar producto" 
                    ClassName="TextField" 
                    variant="outlined"
                    onChange={onChange} //Evento que dispara la función OnChange 
                    value={value}
                  />
                  <Button variant="contained" ClassName="btn" type="submit">Buscar</Button>
                </form>

                <div ClassName="Card-section">
                  {isLoading ? <Spinner ClassName="Spinner"/> : data.id ? <CardProduct data={data} /> : null}
                </div>
                
              </div>
            }/>
            <Route path="*" element={<ErrorPage />}/>
            
          </Routes>
        </BrowserRouter>
      );
  };


export default App;
