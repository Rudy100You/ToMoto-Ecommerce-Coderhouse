import { useParams } from "react-router"
import ItemListContainer from "../ItemList/ItemListContainer"
import { useContext} from "react";
import { AppDataContext } from "../../context/AppDataContext";
import Container from '@mui/material/Container'

const Category = ()=>{
    const {category} = useParams();
    let items =  useContext(AppDataContext).getAllItems();
     
    const currentCategoryItems = items.filter(item=> item.category === category);

    console.log(currentCategoryItems)

    return <Container sx={{margin:"5%", width:"100"}}>
      {currentCategoryItems.length > 0?<ItemListContainer items={currentCategoryItems}></ItemListContainer> :"No hay items para esa categoria"}
    </Container>
            
}
export default Category