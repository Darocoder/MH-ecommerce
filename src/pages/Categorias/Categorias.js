import { useParams } from "react-router-dom";

//Import de Firebase
//import { collection, query, getDocs, where } from "firebase/firestore";
//import { db } from "../../firebase/firebaseConfig";

import { useContext } from "react";
import { Contexto } from "../../App";

import CardCategoria   from "../../components/CardCategoria/CardCategoria";

//Componentes

const Categorias = () => {
    const contexto = useContext(Contexto)

//  const [categoriaData, setCategoriaData] = useState([]);

  let { categoria } = useParams();
  let productosDeEstaCategoria = []

  contexto.productos.forEach((producto) => {
    if ((producto.categoria === categoria)) {
      productosDeEstaCategoria.push(producto);
      console.log("Producto: " , producto)
    }}
    )

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>Categorías de productos</h1>
      </div>
      
      <div style={{ display: "flex", margin:"40px" }}>
        {
        productosDeEstaCategoria.map((data) => {
          return <CardCategoria className="cards" categoriasData={data} key={data.id} />;
          })
        }
      </div>
    </div>
  );
      
}  

export default Categorias;
