import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { db } from './firebase';
import { collection,onSnapshot, doc} from '@firebase/firestore'
const Container = styled.div`
  max-width:1500px;
  margin: 0 auto;
`
const Banner = styled.div`
  background-image:url('https://imgur.com/SYHeuYM.jpg');
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image:linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0,0));
  z-index: 1;
`
const Content = styled.div`
  background:white;
  padding-left:10px;
  padding-right:10px;
  margin-top:-350px;
  display:flex;
`

function Home() {

  const [products,setProducts] = useState([])

  const getProducts = ()=>{
    onSnapshot(collection(db,"product"),(snapshot)=>{
      let tempProducts = []
      tempProducts = snapshot.docs.map((doc)=>(
      {
        id: doc.id,
        product: doc.data()
      }
      ));
      setProducts(tempProducts)
      //console.log(snapshot.docs.map((doc)=> doc.data())) 
    })

  }
  useEffect(()=>{
    getProducts()
  }, []);

  //console.log(products)


  return (
    <div>
      <Container>
        <Banner>
        </Banner>
        <Content>
          {
            products.map((data)=>(
              <Product
                title = {data.product.name}
                price= {data.product.Price}
                rating = {data.product.Rating}
                image= {data.product.Image} 

              />
            ))
          }
        </Content>
      </Container>
    </div>
  )
}

export default Home