import React from 'react'
import Container from '@mui/material/Container'

const ItemListContainer = (props) => {
  return (
    <Container maxWidth="xl">
      {props.greetings}
    </Container>
      
  )
}

export default ItemListContainer
