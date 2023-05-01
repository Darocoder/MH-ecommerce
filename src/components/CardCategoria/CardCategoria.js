import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { Contexto } from "../../App";



const CardCategoria = ( {categoriasData} ) => {
    
    const contexto = useContext(Contexto);

return (
    <Card sx={{ margin: "10px" }}>
    <CardMedia sx={{height: "345px", maxWidth: "305px"}}
        component="img"
        alt={categoriasData.categoria}
        height="auto"
        image={categoriasData.img} 
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {categoriasData.producto}
        </Typography>
        <Typography variant="body1" color="text.primary">
        u$s {categoriasData.precio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {categoriasData.modelo} 
        </Typography>
    </CardContent>
    <CardActions>
        <Button onClick={ () => {
                    contexto.agregarAlCarrito(categoriasData);
        } 
    } size="small">Agregar al carrito</Button>
        <Button size="small">Comprar</Button>
    </CardActions>
    </Card>
);
}
export default CardCategoria;