import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Box from '@mui/material/Box'
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box sx={{width:"100%"}}>
       <Navbar />
      <ItemListContainer greetings={"Hola este es un mensaje de prueba para la primera entrega"}/>
    </Box>
  );
}

export default App;
