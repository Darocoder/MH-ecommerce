import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { Contexto } from "../../App";
import { Link } from "react-router-dom"




const CardProduct = ( {data} ) => {
    
    const contexto = useContext(Contexto);

return (
    <Card sx={{ margin: "10px" }}>

    <Link to={`/producto/${data.id}`}>
    
    <CardMedia sx={{height: "345px", maxWidth: "305px"}}
        component="img"
        alt={data.categoria}
        height="auto"
        image={data.img} 
    />
    </Link>
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.producto}
        </Typography>
        <Typography variant="body1" color="text.primary">
        u$s {data.precio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.modelo} 
        </Typography>
    </CardContent>
    <CardActions>
        <Button onClick={ () => {
                    contexto.agregarAlCarrito(data);
        } 
    } size="small">Agregar al carrito</Button>
    </CardActions>
    </Card>
);
}
export default CardProduct;
//        <Button size="small">Ver producto</Button> 

//    <Link to={`/producto/${data.id}`}>
