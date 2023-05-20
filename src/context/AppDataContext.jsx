import { createContext, useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import {CircularProgress} from "@mui/material"

export const AppDataContext = createContext();
var itemsData = []
const categoriesData = [
    "Motocross",
    "Cuatriciclos",
    "Electricos",
    "Alta Gama",
]

const AppDataContextProvider =  ({children})=>{
    const [loadingFlag,setLoadingFlag] = useState(true);
    
    useEffect(()=>{
        const itemCollection = collection(db,"items")
        getDocs(itemCollection).then((res)=>{
            itemsData = res.docs.reduce((data,item)=> data = [...data,{id:item.id,...item.data()}], [])
            setLoadingFlag(false)
        }).catch(e=>{
            console.log("Could not retrieve data from Firebase: " + e)
        }
        )
    })

    const getItemByID=(itemID)=>{
        return itemsData.find(item=>item.id === itemID)
    }

    const getCategoryByID = (itemID) =>{
        return categoriesData.find(item=>item.id === itemID)
    }

    const getAllItems = ()=>{
        return itemsData
    }

    const getAllCategories = ()=>{
        return categoriesData
    }
    
    const getLoadingState = () => {
        return loadingFlag
    }

    const contextMethods = {getItemByID,getCategoryByID,getAllItems,getAllCategories, getLoadingState}
    return <AppDataContext.Provider value={contextMethods}>
        {loadingFlag?(<CircularProgress></CircularProgress>):children}
    </AppDataContext.Provider>

}

export default AppDataContextProvider;
