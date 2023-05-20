import * as React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AppDataContext } from "../../context/AppDataContext";
import Checkout from "../Checkout/Checkout"
import { useState } from "react";
import ItemCounter from "../Counter/ItemCounter";
import ClearIcon from "@mui/icons-material/Clear";

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

//CartData

const Cart = () => {
  const [openCheckout, setOpenCheckout] = useState(false);
  const [order, setOrder] = useState({});

  const dataContext = useContext(AppDataContext);
  const cartContext = useContext(CartContext);
  const rows = cartContext.getCartItems();

  const handleDeleteItemfromCart = (itemID, e) => {
    e.preventDefault();
    if (confirm("Estas seguro de que deseas quitar este item del carrito?"))
      cartContext.removeFromCart(itemID);
  };

  const openCheckoutHandle = ()=>{
      setOpenCheckout(true)
  }
  const closeCheckoutHandle = ()=>{
      setOpenCheckout(false)
  }

  return rows.length > 0 ? (
    <Box sx={{ display:"flex",flexDirection:"column", width: "100%" }}>
      <TableContainer component={Paper} sx={{ width: "90%", margin: 5 }}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Details
              </TableCell>
              <TableCell align="center" colSpan={2}>
                Precio
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Descripcion</TableCell>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell align="center">Unit</TableCell>
              <TableCell align="center">Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => {
              const dataItem = dataContext.getItemByID(row.itemID);
              return (
                <TableRow key={i}>
                  <TableCell
                    sx={{ display: "flex", alignItems: "center", gap: 2 }}
                  >
                    <ClearIcon
                      color="error"
                      onClick={(e) => handleDeleteItemfromCart(row.itemID, e)}
                    ></ClearIcon>
                    {
                      <img
                        src={dataItem.photoSrc}
                        alt={dataItem.name}
                        style={{ height: "4em", width: "auto" }}
                      />
                    }
                    <Typography color="initial">{dataItem.name}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <ItemCounter
                      initial={row.quantity ?? 1}
                      decrement={()=>cartContext.decrementItemQuantity(row.itemID)}
                      increment={()=>cartContext.incrementItemQuantity(row.itemID)}
                      stock={dataItem.stock}
                    ></ItemCounter>
                  </TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">
                    {ccyFormat(row.quantity * row.price)}
                  </TableCell>
                </TableRow>
              );
            })}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Total:</TableCell>
              <TableCell align="center">
                {ccyFormat(cartContext.getTotalPrice())}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Impuestos:</TableCell>
              <TableCell align="center">{`${cartContext
                .getTaxRatePercentage()
                .toFixed(0)} %`}</TableCell>
              <TableCell align="center">
                {ccyFormat(cartContext.getTaxRate())}
              </TableCell>
            </TableRow>
            <TableRow sx={{fontWeight:"20%"}}> 
              <TableCell colSpan={2}>TOTAL FINAL:</TableCell>
              <TableCell align="center">
                {ccyFormat(cartContext.getFinalPrice())}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={openCheckoutHandle} variant="outlined" sx={{margin:"5%", alignSelf:"end"}}>Comprar</Button> 
      {openCheckout?<Checkout handleCloseStatusHandler= {()=>closeCheckoutHandle()}></Checkout>:null}
    </Box>
   
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        columns: 1,
      }}
    >
      <Typography variant="h3" color="initial">
        No hay items en el Carrito
      </Typography>
      <Button variant="outlined" color="info" component={Link} to={"/"}>
        Seguir comprando
      </Button>
    </Box>
  );
};
export default Cart;
