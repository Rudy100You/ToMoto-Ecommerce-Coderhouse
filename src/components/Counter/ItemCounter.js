import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState } from "react";
import { ButtonGroup, Button } from "@mui/material";

export default ({ stock, initial, decrement, increment }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
      increment();
    }
  };

  const handleDecrement = () => {
    if (count >= initial && count > 1) {
      setCount(count - 1);
      decrement();
    }
  };

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button onClick={handleDecrement}>-</Button>
      <Button disabled>{count}</Button>
      <Button onClick={handleIncrement}>+</Button>
    </ButtonGroup>
  );
};
