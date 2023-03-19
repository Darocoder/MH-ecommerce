import React, { Component } from "react";
import "./App.css";

//COMPONENTS
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav"
import CardProduct from "./components/CardProduct/CardProduct"

class App extends Component {
    render() {
      return (
      <div className="App">
        <Header variable="Mercado Herrajes"/>
        <Nav />
        <div ClassName="Card-section">
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
      );
    };
};

export default App;
