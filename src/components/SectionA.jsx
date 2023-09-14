import React from 'react'
import styled from 'styled-components'
const Sdiv = styled.div`
    border-bottom:1px solid #ededed;
    height:19%;
    margin-top:60px;
`;
const Flex = styled.div`
    display:flex;
    margin:40px;
`;
const Textbox = styled.div`
    color:#333;
    width:64%;
    font-size:20px;
`;
const Sh1 = styled.h1`
    font-size:22px;
`;
const Tspan = styled.div`
    width:85px;
    height:3px;
    background-color: #935d8c;
    background-image: url("../public/images/overlay.png"), linear-gradient(45deg, #e37682 15%, #5f4d93 70%, #5474C4 15%);
    margin-bottom:20px;
`;
const Sp = styled.p`
    color:#666;
    font-size:14px;
`;
const Sbtn = styled.button`
    border: 1px solid #e6e6e6;
    backgroud-color:#fff;
    width:120px;
    height:40px;
    border-radius:12px;
    color:#999
`;
const Ldiv = styled.div`
    width:36%;  
`;
const Lround = styled.div`
    border:1px solid #e6e6e6;
    width:220px;
    height:220px;
    border-radius:220px;
    margin:20px;
    margin-right:50px;
    float:right;
    position:relative;
`;
const Lspan = styled.span`
    position:absolute;
    width:180px;
    height:180px;
    background-color:#CECCB3
    background-image: url("../public/images/overlay.png"), linear-gradient(-125deg, #6B5B37 15%, #918364 85%);
    background-image: url("../public/images/overlay.png"), -moz-linear-gradient(-125deg, #6B5B37 15%, #918364 85%);
    background-image: url("../public/images/overlay.png"), -ms-linear-gradient(-125deg, #6B5B37 15%, #918364 85%);
    background-image: url("../public/images/overlay.png"), -webkit-linear-gradient(-125deg, #6B5B37 15%, #918364 85%);
    border-radius:180px;
    margin:20px;
    margin-right:50px;
    float:right;
    top:-3px;
    left:-2.5px;
`;
const SectionA = () => {
  return (
    <Sdiv>
        <Flex>
            <Textbox>
                <Sh1>Ipsum sed adipiscing</Sh1>
                <Tspan></Tspan>
                <Sp>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Sp>
                <Sbtn>Learn More</Sbtn>
            </Textbox>
            <Ldiv>
                <Lround><Lspan></Lspan></Lround>
            </Ldiv>
        </Flex>
    </Sdiv>
  )
}

export default SectionA