import React from 'react'
import MyFridgeInput from './MyFridgeInput'
import MyFridgeList from './MyFridgeList'
import styled from "styled-components"

function MyFridgeComponent() {
  return (
    <MyFridgeDiv>
      <MyFridgeInput/>
      <MyFridgeList/>
    </MyFridgeDiv>
  )
}

const MyFridgeDiv = styled.div`
left: 0%;
margin-left: 1rem;
margin-top: 1rem;
width: 33%;

`

export default MyFridgeComponent
