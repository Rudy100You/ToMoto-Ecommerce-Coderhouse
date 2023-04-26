import { Grid } from "@mui/material";
import Item from "./Item";

const ItemList = ({itemList}) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 4 }}>
      {itemList.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <Item item={item}></Item>
        </Grid>
      ))}
    </Grid>
  );
};
export default ItemList