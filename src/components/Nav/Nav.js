import "./Nav.css"
import Shop from "../Shop/Shop"
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { useContext } from "react";
import { Contexto } from "../../App";
import MenuCategorias from "../MenuCategorias/MenuCategorias"

const Nav = () => {
    const contexto = useContext(Contexto)

    return(
        <nav >
            <ul >
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
                <li>
                    <MenuCategorias />
                </li>
                <li>
                    <Link to="/como-comprar">Cómo comprar</Link>
                </li>
                <li>
                    <Link to="/historia">Historia</Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
                <li>
                    <Link to="/cart"><Shop /></Link>
                </li>
                <li>                   
                    <Button onClick={ () => {contexto.vaciarCarrito();} } >Vaciar Carrito</Button>
                </li>
            </ul>
        </nav>
    );
};
export default Nav;


