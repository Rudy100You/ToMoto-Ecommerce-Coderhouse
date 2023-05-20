import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category/Category";
import Main from "./components/Main";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import CartContextProvider, { CartContext } from "./context/CartContext";
import AppDataContextProvider from "./context/AppDataContext";
import Cart from "./components/Cart/Cart.jsx";
import { useContext } from "react";

function App() {
  return (
    <BrowserRouter>
    <AppDataContextProvider>
      <CartContextProvider>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Main></Main>}></Route>
            <Route
              exact
              path="/categories/:category"
              element={<Category/>}
            ></Route>
            <Route exact path="/items/:itemId" element={<ItemDetail />}></Route>
            <Route exact path="/cart" element ={<Cart/>}></Route>
        </Routes>
      </CartContextProvider>
      </AppDataContextProvider>
    </BrowserRouter>
  );
}

export default App;
