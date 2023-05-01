import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Import de Firebase
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import CardCategoria   from "../../components/CardCategoria/CardCategoria";

//Componentes

const Categorias = () => {
  const [categoriaData, setCategoriaData] = useState([]);

  let { categoria } = useParams();

  useEffect(() => {
    const getCategorias = async () => {
      const q = query(collection(db, "productos"), where("categoria", "==", categoria));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setCategoriaData(docs);
    };
    getCategorias();
  }, [categoria]);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>Categorías de productos</h1>
      </div>
      
      <div style={{ display: "flex", margin:"40px" }}>
        {categoriaData.map((data) => {
          return <CardCategoria className="cards" categoriasData={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default Categorias;
