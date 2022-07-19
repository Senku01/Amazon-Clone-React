import React from 'react'
import styled from 'styled-components'
import Home from './Home'
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
  display:flex
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


function Product({title, price, rating, image, id}) {
  return (
    <Container>
      <Title>
        {title }
      </Title>
      <Price>
          {price }
      </Price>
      <Rating>
      {//Looping the numbers of Rating that comes from DataBase
        Array(rating)
        .fill()
        .map(rating => <p>⭐</p>)
      }
      </Rating>
        <Image src={ image}/>
        <ActionSection>
        <AddToCartButton>
          Add To Cart
        </AddToCartButton>      
        </ActionSection>
        <Title>
        Macbook
      </Title>
      <Price>
        $3000
      </Price>
      <Rating>
      ⭐ ⭐ ⭐ ⭐ ⭐
      </Rating>
        <Image src="https://m.media-amazon.com/images/I/81zKcC5wJ6L._AC_SL1500_.jpg"/>
        <ActionSection>
        <AddToCartButton>
          Add To Cart
        </AddToCartButton>      
        </ActionSection>
      
    </Container>
  )
}

export default Product