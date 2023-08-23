import React, { useContext, useState } from 'react';
import {  MyFridgeContext } from '../../Context/MyFridgeContext';
import styled from 'styled-components';



function MyFridgeList() {
    const { fridge, setFridge } = useContext(MyFridgeContext);

    const onDelete = (ingredient) => {
      localStorage.removeItem(ingredient)
      const updatedList = fridge.filter(item => item !== ingredient);
      setFridge(updatedList);
    }
// console.log("Rendering");
    return (
    <div>
  <ListItems>
          {fridge.map((element, index) => (
            <ListElement key={index} value={element}>{element}<DeleteButton onClick={() => onDelete(element)}> <img src="../assets/images/deleteItemIcon.png" width={"15px"} height={"15px"}/></DeleteButton></ListElement>
          ))}
        </ListItems>
    </div>
  )
          }
const DeleteButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  justify-content: space-between;
  flex-wrap: nowrap;
`
const ListElement = styled.li` 
display: flex;
justify-content: space-between;
 text-decoration: none ;
 padding-left: 0;
`

const ListItems = styled.ul`
  list-style: none;
  left: 0;
  padding: 0;
  width: 50%;
`
export default MyFridgeList
