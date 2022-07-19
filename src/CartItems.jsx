import React from 'react'
import styled from 'styled-components'
import CartItem from './Cartitem'

const Container = styled.div`
  height:300px;
  background-color:blue;
  flex:0.8;
  margin-right: 20px;
  padding:20px
`
const Title = styled.div`
`
const ItemsContainer =styled.div`
`


function CartItems() {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr></hr>
      <ItemsContainer>
        <CartItem />
      </ItemsContainer>
    </Container>
  )
}

export default CartItems