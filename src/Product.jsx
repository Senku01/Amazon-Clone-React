import React from 'react'
import styled from 'styled-components'

const Container =styled.div`
  background-color:white;
  z-index:100;
  flex:1;
  padding:20px;
  margin:10px;
  max-height:400px;
  display:flex;
  flex-direction:column;
`
const Title= styled.span`
`
const Price= styled.span`
  font-weight:500px;
  margin-top:3px;
`
const Rating= styled.div`
`
const Image= styled.img`
  max-height:200px;
  object-fit:contain;
`
const AddToCartButton= styled.button`
  width:100px;
  background-color:yellow;
  border:2px solid black;
  border-radius:2px;
`
const ActionSection= styled.div`
  display:grid;
  place-items:center;
  margin-top:12px`
function Product() {
  return (
    <Container>
      <Title>
        Ipad Pro
      </Title>
      <Price>
        $4000
      </Price>
      <Rating>
      ⭐ ⭐ ⭐ ⭐ ⭐
      </Rating>
        <Image src=""/>
        <ActionSection>
        <AddToCartButton>
          Add To Cart
        </AddToCartButton>      
        </ActionSection>
      
    </Container>
  )
}

export default Product