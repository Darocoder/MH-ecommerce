import React, { useState } from "react";
import { useContext } from "react";
import { Contexto } from "../../App"
import firebase from "firebase/app"
import firestore from "firebase/firestore"

// Firebase
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import "./CartForm.css";

import TextField from "@mui/material/TextField";

import CompraConfirm from "../../components/CompraConfirm/CompraConfirm";

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  name: "",
  lastName: "",
  city: "",
};

const CartForm = () => {
  const [values, setValues] = useState(initialState);
  // Este estado está destinado a guardar el id de la compra
  const [purchaseID, setPurchaseID] = useState("");

  // Obtenemos el carrito desde el contexto
  const contexto = useContext(Contexto)
  const contenidoCarrito = contexto.carrito

  // Calculamos el total de la compra sumando los precios de todos los productos del carrito
  const total = contenidoCarrito.reduce((total, producto) => total + producto.precio, 0)
  
  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Añadimos un nuevo documento con un ID generado
    const docRef = await addDoc(collection(db, "compras"), {
      values,
      total,
      contenidoCarrito,
    });

    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div style={styles.containerShop}>
      <h1>Formulario de compra</h1>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={onChange}
        />
        <TextField
          placeholder="Last Name"
          style={{ margin: 10, width: 400 }}
          name="lastName"
          value={values.lastName}
          onChange={onChange}
        />
        <TextField
          placeholder="City"
          style={{ margin: 10, width: 400 }}
          name="city"
          value={values.city}
          onChange={onChange}
        />
        <button className="btnASendAction" type="submit">
          Send
        </button>
      </form>
      {purchaseID.length ? <CompraConfirm purchaseID={purchaseID} /> : null}
    </div>
  );
};

export default CartForm;