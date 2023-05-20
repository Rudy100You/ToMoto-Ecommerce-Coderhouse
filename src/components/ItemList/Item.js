import { Card, CardActionArea, CardContent, CardMedia, Typography, Chip} from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function Item({item}){
    const cartContext = useContext(CartContext)

    const curentItemQuantityInCart = cartContext.getItemQuantity(item.id)??0
    const inStock = curentItemQuantityInCart < item.stock

    if(!item.name)
        item.name = "item"
    return (<><Card variant="outlined" sx={{ minWidth: "100%", minHeight:"100%", border:"black", borderWidth:"6px",textDecoration:"none"}}
      component={NavLink}
      to={`/items/${item.id}`}>
        <CardActionArea sx={{minWidth: "100%",height:"fit-content",border:3, borderColor:( inStock?"#518f27":"red")}}>
          <CardMedia
            component="img"

            image= {item.photoSrc}
            alt={item.name}
            sx={{width:"100%",height:"auto", objectFit:"cover"}}
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"1.5em"}}>
              {(item.name)}
            </Typography>
            <Typography variant="h6" sx={{fontSize:"2em"}}color="text.disabled">
              {(item.price ?? "0")+ "$"}
            </Typography>
            <Chip label={inStock?"En stock":"Sin Stock"} color={inStock?"success":"error"}/>
          </CardContent>
        </CardActionArea>
      </Card>
     </>)
  }

export default Item;