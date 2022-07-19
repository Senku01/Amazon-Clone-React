import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
`

const CartItemInfo = styled.div`
`
const CartItemInfoTop = styled.div`
`
const CartItemInfoBottom = styled.div`
`
const CartItemQuantityContainer = styled.div`
`

const CartItemDeleteContainer = styled.div`
`
const CartItemPrice =styled.div`
`

function Cartitem() {
  return (
    <Container>
        <ImageContainer>
            <img src='https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg' />
        </ImageContainer>
        <CartItemInfo>
            <CartItemInfoTop>
                <h2>IPad Pro</h2>
            </CartItemInfoTop>
            <CartItemInfoBottom>
                <CartItemQuantityContainer>5</CartItemQuantityContainer>
                <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
            </CartItemInfoBottom>
        </CartItemInfo>

        <CartItemPrice>
            $1400
        </CartItemPrice>

    </Container>
  )
}

export default Cartitem