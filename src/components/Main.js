import { Box, Container } from "@mui/material"
import ItemListContainer from "./ItemList/ItemListContainer"
import { useContext } from "react"
import { AppDataContext } from "../context/AppDataContext"

const Main = ()=>{
    let items = useContext(AppDataContext).getAllItems()
     return <Container sx={{margin:"5%", width:"100%"}}>
                  <ItemListContainer items={items}/>
                </Container>

}
export default Main;
