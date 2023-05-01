import React, { useState } from "react";

// Firebase
import { collection, addDoc } from "firebase/firestore";
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

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "compras"), {
      values,
    });
    // console.log("Document written with ID: ", docRef.id);
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