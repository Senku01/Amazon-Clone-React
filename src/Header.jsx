import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import {Link} from 'react-router-dom'
const HeaderLogo = styled.div`
    img{
        width:100px;
        margin-left:11px;
    }
`

const HeaderOptionAddress = styled.div`
    padding-left:9px;
    display:flex;
    align-items:center;
`
const OptionLineOne = styled.div`
`


const OptionLineTwo = styled.div`
    font-wight:700px`

const Container = styled.div`
    height:60px;
    background-color: #131921;
    display: flex;
    align-items:center;
    justify-content:space-between;
    color:white;
`
const HeaderSearch = styled.div`
    display:flex;
    flex-grow:1;
    height:40px;
    border-radius:4px;
    overflow:hidden;
    margin-left:4px;
    :focus-within {
        box-shadow: 0 0 0 3px orange;
    }
    `

const HeaderSearchInput = styled.input`
    flex-grow:1;
    border:0;
    :focus{
        border:none;
    }`


const HeaderSearchIconContainer = styled.div`
    background-color:orange;
    width:45px;
    color:black;
    display:flex;
    justify-content:center;
    align-items:center;
`
const HeaderNavItems = styled.div`
    display:flex;
`

const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px;
`
const HeaderOptionCart = styled.div`
    display:flex; 
    a{
        display:flex;
        align-items:center;
        padding-right:9px
    }`
const CartCount = styled.div`

`


function Header(){
    return(
        <Container>
            <HeaderLogo>
                <img src="src/images/Amazon.png" alt="Smszinx"/>
            </HeaderLogo>
            <HeaderOptionAddress>
                <FmdGoodIcon/>
                <HeaderOption> 
                    <OptionLineOne>Hello </OptionLineOne>
                    <OptionLineTwo> Select Your Address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>

                <HeaderSearchInput type="text"/>
                <HeaderSearchIconContainer>
                    <SearchIcon/>
                </HeaderSearchIconContainer>

            </HeaderSearch>

            <HeaderNavItems>

                <HeaderOption>
                    <OptionLineOne>Hello, Vignesh</OptionLineOne>
                    <OptionLineTwo> Accounts & Lists</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>

                
                    <HeaderOptionCart>
                    <Link to="/Cart">
                        <ShoppingCartIcon/>
                        <CartCount>4</CartCount>
                    </Link>
                    </HeaderOptionCart>
                    
                
            </HeaderNavItems>
        </Container>
    )
}

export default Header



// const HeaderLogo = styled.div`
//     heigth: 60px;
//     background-color:#0f1111
// `