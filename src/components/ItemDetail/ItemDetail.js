import ItemCount from "../Counter/ItemCounter";

import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { AddShoppingCartSharp } from "@mui/icons-material";
import { auto } from "@popperjs/core";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AppDataContext } from "../../context/AppDataContext";

const ItemDetail = () => {
  const navigate = useNavigate();

  const { itemId } = useParams();
  const cartContext = useContext(CartContext);
  const dataContext = useContext(AppDataContext)

  const currentItem = dataContext.getAllItems().find((item) => (item.id === itemId));
  const curentItemQuantityInCart = cartContext.getItemQuantity(currentItem.id)??0

  //TODO: Centralize Item Definition
  const [cartItem,setCartItem] = useState({
    itemID:currentItem.id,quantity:curentItemQuantityInCart,price:currentItem.price
  });

  const handleQuantityDecrement= ()=>{
    setCartItem({...cartItem,quantity : cartItem.quantity-=1})
  }

  const handleQuantityIncrement = ()=>{
    setCartItem({...cartItem,quantity : cartItem.quantity+=1})
  }

  const handleOnSumbit = (event)=>{
    event.preventDefault();
    if(!cartContext.existsInCart(cartItem.itemID)){
      cartContext.addToCart(cartItem)
    }
    else{
      cartContext.addItemQuantity(cartItem.itemID, cartItem.quantity)
    }
    navigate("/cart")
  }
  
  const itemInStock = currentItem.stock > 0 && (curentItemQuantityInCart < currentItem.stock);

  return (
    <Card sx={{ maxWidth: 345, maxHeight: 630 , margin:auto, marginTop: "5%"}}>
      <CardMedia
        component="img"
        height="140"
        image={currentItem.photoSrc}
        alt={currentItem.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {currentItem.name}
        </Typography>
        <Typography variant="h6" color="text.disabled">
          {(currentItem.price ?? "0") + "$"}
        </Typography>
        <Typography gutterBottom variant="h7" component="p">
          {currentItem.desc}
        </Typography>
        { itemInStock? (
          <ItemCount initial={cartItem.quantity} stock={currentItem.stock} decrement = {handleQuantityDecrement} increment={handleQuantityIncrement}></ItemCount>
        ) : (
          <Typography variant="h7" color="red">
            {"Sin Stock" + (curentItemQuantityInCart === currentItem.stock?". La cantidad maxima esta en el carrito":"")}
          </Typography>
        )}

        {itemInStock?<Button
          variant="outlined"
          color="success"
          sx={{
            minWidth: "180px",
            maxWidth: "400px",
            m: "5%",
            display: "flex",
            flexWrap: "noWrap",
            gap: "2%",
          }}
          onClick={handleOnSumbit}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", textAlign: "center", width: "auto" }}
          >
            Añadir al carrito
          </Typography>
          <AddShoppingCartSharp sx={{ width: "auto" }}></AddShoppingCartSharp>
        </Button>:null}
      </CardContent>
    </Card>
  );
};
export default ItemDetail;
