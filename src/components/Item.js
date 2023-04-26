import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { border } from "@mui/system";
import { NavLink } from "react-router-dom";

export default ({item}) =>{
    if(!item.name)
        item.name = "item"
    return (
      <Card sx={{ maxWidth: 345, minHeight:600, border:"black",borderWidth:"1,2px"}}
      component={NavLink}
      to={`/items/${item.id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image= {item.photoSrc}
            alt={item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {(item.name)}
            </Typography>
            <Typography variant="h6" color="text.disabled">
              {(item.price ?? "0")+ "$"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }