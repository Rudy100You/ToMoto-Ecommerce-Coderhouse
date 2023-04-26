import { useParams } from "react-router"
import ItemListContainer from "./ItemListContainer"
import { useEffect } from "react";

const Category = ({items})=>{
    const {categoryId} = useParams();
    useEffect(()=>{
        console.log('Recieved categoryId ['+ categoryId +']')
        return()=>{
            console.log('Will change categoryId ['+ categoryId +']')
        }
    },[categoryId])
    const currentCategoryItems = items.filter(item=> item.categoryId == categoryId);
    return <>
            {currentCategoryItems.length > 0?<ItemListContainer items={currentCategoryItems}></ItemListContainer> :"No hay items para esa categoria"}
        </>
}
export default Category