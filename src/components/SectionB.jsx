import React from 'react'
import styled from 'styled-components'
import { FcLikePlaceholder,FcLandscape,FcBiotech } from "react-icons/fc";
const Sdiv = styled.div`
    border-bottom:1px solid #ededed;
    height:30%;
    margin-top:60px;
`;
const Sbh1 = styled.h1`
    color:#666;
    text-align:center;
    font-size:25px;
`;
const Tdiv = styled.div`
    margin: 0 auto;
    width:85px;
    height:3px;
    background-color: #935d8c;
    background-image: url("../public/images/overlay.png"), linear-gradient(45deg, #e37682 15%, #5f4d93 70%, #5474C4 15%);
    margin-bottom:20px;
`;
const Sbdiv = styled.div`
    padding-top:30px;
    width:80%;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
`;
const Sbtdiv = styled.div`
    
    width:33.3333%;
`;
const Ldiv = styled.div`
    width:180px;
    height:180px;
    margin:0 auto;
    border:1px solid #e6e6e6;
    border-radius:90%;
    position:relative;
`;
const Rdiv = styled.div`
    width:155px;
    height:155px;
    margin:0 auto;
    border:1px solid #e6e6e6;
    border-radius:90%;
    position:absolute;
    top:10px;
    left:10px;
    padding:15px;
`;
const Stdiv = styled.div`
    margin-left:20px;
    margin-right:20px;
`;
const Th3 = styled.h3`
    color:#333;
    text-align:center;
`;
const Tp = styled.p`
    color:#333;
    text-align:center;
    font-size:13px;
`;
const Sbbutton = styled.button`
    border: 1px solid #e6e6e6;
    backgroud-color:#fff;
    width:120px;
    height:40px;
    border-radius:12px;
    color:#999;
    margin-left:45%;
`;
const SectionB = () => {
  return (
    <Sdiv>
        <Sbh1>Magna veroeros</Sbh1>
        <Tdiv></Tdiv>
        <Sbdiv>
            <Sbtdiv>
                <Ldiv>
                    <Rdiv><FcLikePlaceholder style={{fontSize:"120px"}}/></Rdiv>
                </Ldiv>
                <Stdiv>
                    <Th3>Ipsum consequat</Th3>
                    <Tp>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum </Tp>
                </Stdiv>
            </Sbtdiv>
            <Sbtdiv>
                <Ldiv>
                    <Rdiv><FcBiotech style={{fontSize:"120px"}}/></Rdiv>
                </Ldiv>
                <Stdiv>
                    <Th3>Ipsum consequat</Th3>
                    <Tp>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum </Tp>
                </Stdiv>
            </Sbtdiv>
            <Sbtdiv>
                <Ldiv>
                    <Rdiv><FcLandscape style={{fontSize:"120px"}}/></Rdiv>
                </Ldiv>
                <Stdiv>
                    <Th3>Ipsum consequat</Th3>
                    <Tp>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum </Tp>
                </Stdiv>
            </Sbtdiv>
            
        </Sbdiv>
        <Sbbutton>Learn More</Sbbutton>
    </Sdiv>
  )
}

export default SectionB