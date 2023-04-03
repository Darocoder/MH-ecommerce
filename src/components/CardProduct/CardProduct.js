import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardProduct = ({ data }) => {
return (
    <Card sx={{ maxWidth: 345, margin: "20px" }}>
    <CardMedia
        component="img"
        alt={data.title}
        height="auto"
        image={data.image}
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.title}
        </Typography>
        <Typography variant="body1" color="text.primary">
        u$s {data.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.description} 
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small">Agregar al carrito</Button>
        <Button size="small">Comprar</Button>
    </CardActions>
    </Card>
);
}
export default CardProduct;