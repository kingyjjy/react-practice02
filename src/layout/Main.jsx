import React from 'react'
import SectionA from '../components/SectionA'
import SectionB from '../components/SectionB'
import styled from 'styled-components'
const Divbox = styled.div`
    background-color:#fff;
    width:99%;
    float:right;
    height:1800px;
`;
const Main = () => {
  return (
    <Divbox>
        <SectionA/>
        <SectionB/>
    </Divbox>
  )
}

export default Main