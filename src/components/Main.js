import { Box } from "@mui/material"
import ItemListContainer from "./ItemListContainer"
import ItemCount from "./ItemCount"

const Main = ({items})=>{
    
     return <Box sx={{ width: "100%", marginTop: "5%"}}>
                  <ItemListContainer items={items}/>
                </Box>

}
export default Main;
