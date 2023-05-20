import React from 'react'
import Container from '@mui/material/Container'
import ItemList from './ItemList'

const ItemListContainer = ({items}) => {
  return (
    <Container maxWidth="xl">
      <ItemList itemList= {items}></ItemList>
    </Container>
      
  )
}

export default ItemListContainer
