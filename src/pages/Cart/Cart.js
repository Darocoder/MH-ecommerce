import CardProduct from "../../components/CardProduct/CardProduct";
import "./Cart.css";
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { Contexto } from "../../App";
import CartForm from "../../components/CartForm/CartForm"

const Cart = ()  => {

const contexto = useContext(Contexto)
const contenidoCarrito = contexto.carrito
console.log("Contenido Del Carrito:", contenidoCarrito)

const precioTotal = contenidoCarrito.reduce((total, producto) => total + producto.precio, 0);

  return (
    <div>
      <div>
        <CartForm />
      </div>
    
      <div className="grillaProductos">
        {contenidoCarrito.map((data) => {
        
        return(
          <div key={data.id}>
            <Link to={`/producto/${data.id}`}>
              <CardProduct id={data.id} data={data}/>
            </Link>
          </div>  
        );                        
      })}
      </div>
      <div className="cantidad">
        <span value="cantidad">Productos agregados: {contexto.carrito.length}</span>
        <span value="total">Valor total de la compra: u$s{precioTotal} </span>
      </div>
  </div>
      );                        
}


export default Cart;