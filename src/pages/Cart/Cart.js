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
let acumulado = 0
//const precioTotal = contenidoCarrito.reduce((total, producto) => total + producto.precio, 0);
contenidoCarrito.forEach((data) => { acumulado += data.cantidadCarrito * data.precio })

  return (
    <div>
      <div>
        <CartForm />
      </div>
    
      <div className="grillaProductos">
        {contenidoCarrito.map((data) => {
        console.log("Carrito" ,data)
        return(
          <div className="subtotal" key={data.id}>
              <CardProduct id={data.id} data={data}/>
              Unidades:{data.cantidadCarrito} Subtotal: u$s{data.cantidadCarrito*data.precio}
          </div>  
        );                        
      })}
      </div>
      <div className="cantidad">
        <span value="cantidad">Productos agregados: {contexto.carrito.length}</span>
        <span value="total">Valor total de la compra: u$s{acumulado} </span>
      </div>
  </div>
      );                        
}


export default Cart;