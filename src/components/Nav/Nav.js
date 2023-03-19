import "./Nav.css"
import Shop from "../Shop/Shop"

const Nav = () => {
    return(
        <nav ClassName="navigation">
            <ul ClassName="list-ul">
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                <a href="">Productos</a>
                </li>
                <li>
                <a href="">Cómo comprar</a>
                </li>
                <li>
                <a href="">Historia</a>
                </li>
                <li>
                <a href="">Contacto</a>
                </li>
                <li>
                    <Shop />
                </li>
            </ul>
        </nav>
    );
};
export default Nav;


