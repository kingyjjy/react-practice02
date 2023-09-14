import React from 'react'
import styled from 'styled-components'
import {FcReddit} from 'react-icons/fc'
const Head = styled.header`
    padding: 4em 1.5em 1em 1.5em;
`;
const Logo = styled.span`
    display:flex;
    margin:0 auto 1.5em auto;
    background:#fff;
    border-radius:50%;
    align-items:center;
    justify-content:center;
    width:85px;
    height:85px;

`;
const Stella = styled.h1`
    text-align:center;
    font-size:2em;
    color:rgba(255,255,255,.9);
    font-weight:200;
    font-variant: small-caps;
`;
const Ptext = styled.p`
    opacity:1;
    transition:opacity 3s ease;
    transition-delay:0.5s;
    font-size:1em;
    letter-spacing:0;
    color:rgba(255,255,255,.7);
    text-align:center;
`;
const Header = () => {
  return (
    <Head>
        <Logo><FcReddit style={{fontSize:"2em"}}/></Logo>
        <Stella >Stella</Stella>
        <Ptext>React study hard <br/>
            <a href="#">@YJJY</a> for <a href="#">BLOG UP.</a>
        </Ptext>
    </Head>
  )
}

export default Header