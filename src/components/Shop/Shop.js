import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Shop.css"

const Shop = () => {
    return(
        <div ClassName="Carrito" style={{ display: "flex" }}>
            <ShoppingCartIcon sx={{ color: "green" }}/>
            <span ClassName="Cantidad-carrito">3</span>
        </div>
    );
};
export default Shop;