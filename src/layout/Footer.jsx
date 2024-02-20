import React from 'react'
import styled from 'styled-components'
import { MdOutlineContactMail, MdOutlineContactPhone } from "react-icons/md";

const Footera = styled.div`
  margin-top:102em;
`
const FText = styled.h1`
  text-align:start;
  font-size:2em;
  font-weight:200;
  margin:1em;
`
const Fdiv = styled.div`
  display:flex;
  justify-content:space-between;
`
const Clogo = styled.div`
  margin-left:2em;
  margin-bottom:4em;
`
const Logop = styled.p`
  display:flex;
  justify-content:left;
  font-size:1.3em;
  margin-bottom:10px;
`
const Coninf = styled.span`
  margin-left:10px;
  font-size:0.8em;
`
const Sidediv = styled.div`
  margin-right:3em;
  flex-direction:column;
  display:flex;
`
const Menua = styled.a`
  margin-bottom:0.5em;
  &:hover{  
    color : #000;
  }
`
const Copydiv =  styled.div`
  text-align:center;
  margin-bottom:1.5em;  
`


const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year
  };
  return (
    <Footera>
      <FText>
        Contact me!
      </FText>
      <Fdiv>
        <Clogo>
          <Logop>
            <MdOutlineContactMail style={{fontSize:"1.8em"}}/>
            <Coninf>examplemail@naver.com</Coninf>
          </Logop>
          <Logop>
            <MdOutlineContactPhone style={{fontSize:"1.8em"}}/>
            <Coninf>010-3223-2233</Coninf>
          </Logop>
        </Clogo>
        <Sidediv>
          <Menua href="#">Introduction</Menua>
          <Menua href="#">First Section</Menua>
          <Menua href="#">Second Section</Menua>
          <Menua href="#">Third Section</Menua>
        </Sidediv>
      </Fdiv>
      <Copydiv style={{textAlign:"center", marginBottom:"1.5em"}}>
        Copyright &copy; <span>{thisYear()} yjjy's practice blog</span>
      </Copydiv>
      
    </Footera>
  )
}

export default Footer