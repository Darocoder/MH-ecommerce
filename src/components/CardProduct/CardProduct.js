import * as React from 'react';
import { useState, useEffect } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const CardProduct = ( {carrito, incrementar, id, data} ) => {
function sarasa (){
    console.log("sarasa")
    incrementar()
}

return (
    <Card sx={{ margin: "10px" }}>
    <CardMedia sx={{height: "345px", maxWidth: "305px"}}
        component="img"
        alt={data.categoria}
        height="auto"
        image={data.img} 
    />
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
        <Button onClick={sarasa} size="small">Agregar al carrito</Button>
        <Button size="small">Comprar</Button>
    </CardActions>
    </Card>
);
}
export default CardProduct;