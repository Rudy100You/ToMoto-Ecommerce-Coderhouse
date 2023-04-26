import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Main from "./components/Main";
import {items, categories} from "./data/MockData";
import ItemDetail from "./components/ItemDetail";
function App() {
  return (
    <BrowserRouter>
      <Navbar categories={categories} />
      <Routes >
        <Route exact path="/" element={<Main items={items}></Main>}></Route>
        <Route
          exact
          path="/categories/:categoryId"
          element={<Category items={items} />}
        ></Route>
        <Route exact path="/items/:itemId" element= {<ItemDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
