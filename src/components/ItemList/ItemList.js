import { Grid } from "@mui/material";
import Item from "./Item";

const ItemList = ({itemList}) => {
  return (
    <Grid container spacing={{ xs: 2, s:3 ,md: 4,l:5}} sx={{ mt: 4, marginInline:-1 }}>
      {itemList.map((item) => (
        <Grid item key={item.id} xs={12} sm={5} md={3} sx={{paddingInline:1 ,maxWidth:300}}>
          <Item item={item}></Item>
        </Grid>
      ))}
    </Grid>
  );
};
export default ItemList