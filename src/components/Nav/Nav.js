import "./Nav.css"
import Shop from "../Shop/Shop"
import { Link } from "react-router-dom"

const Nav = () => {
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
            </ul>
        </nav>
    );
};
export default Nav;


