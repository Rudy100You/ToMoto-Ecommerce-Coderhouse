import ItemCount from "./ItemCount";
import { items } from "../data/MockData";
import { useParams } from "react-router";
import { useEffect } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { maxHeight } from "@mui/system";
import { AddShoppingCartSharp } from "@mui/icons-material";
import { auto } from "@popperjs/core";

const ItemDetail = () => {
  const { itemId } = useParams();
  useEffect(() => {
    console.log("Recieved itemId [" + itemId + "]");
    return () => {
      console.log("Will change itemId [" + itemId + "]");
    };
  }, [itemId]);

  const currentItem = items.find((item) => (item.id = itemId));

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
        {currentItem.stock > 0 ? (
          <ItemCount initial={1} stock={currentItem.stock}></ItemCount>
        ) : (
          <Typography variant="h7" color="text.danger">
            Sin Stock
          </Typography>
        )}

        <Button
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
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", textAlign: "center", width: "auto" }}
          >
            Añadir al carrito
          </Typography>
          <AddShoppingCartSharp sx={{ width: "auto" }}></AddShoppingCartSharp>
        </Button>
      </CardContent>
    </Card>
  );
};
export default ItemDetail;
