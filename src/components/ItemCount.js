import { Box, ButtonGroup, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import  Button  from "@mui/material/Button";
import { display, maxWidth, width } from "@mui/system";
import { AddShoppingCartSharp } from "@mui/icons-material";
import { auto } from "@popperjs/core";

export default ({ stock, initial }) => {
  const [count = initial, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > initial) setCount(count - 1);
  };

  return (<Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBlock: '3%',
      flexWrap:'wrap',
      height: 'auto',
      bgcolor: (theme) => theme.palette.background.default,
    }}
  >
    <Typography variant="h8" color="initial" sx={{display:'block',width:'100%'}}>Cantidad</Typography>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
        margin: 'auto',
        borderRadius: 1,
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
      }}
      id="counter"
    >
      <Button
        onClick={handleDecrement}
        sx={{
          bgcolor: 'white',
          minWidth: '40px',
          height: '100%',
          p: 0,
        }}
      >
        <RemoveIcon sx={{ fontSize: '2rem', color: 'black' }} />
      </Button>
      <Box
        component="form"
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderLeft: '1px solid #f0f0f0',
          borderRight: '1px solid #f0f0f0',
        }}
      >
        <Typography
          variant="h4"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setCount(parseInt(e.target.innerText) || 0)}
          sx={{ fontWeight: 'bold', textAlign: 'center' }}
        >
          {count}
        </Typography>
      </Box>
      <Button
        onClick={handleIncrement}
        sx={{
          bgcolor: 'white',
          minWidth: '40px',
          height: '100%',
          p: 0,
        }}
      >
        <AddIcon sx={{ fontSize: '2rem', color: 'black' }} />
      </Button>
      
    </Box>
    
  </Box>
  )
}
