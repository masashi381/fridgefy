import React, { useContext, useState } from 'react';
import { MyFridge, MyFridgeContext } from '../../Context/MyFridgeContext';
import styled from 'styled-components';

function MyFridgeList() {
    const { fridge, addIngredientToFridge } = useContext(MyFridgeContext);

// console.log("Rendering");
    return (
    <div>
  <ul>
          {fridge.map((element, index) => (
            <li key={index} value={element}>{element}</li>
          ))}
        </ul>
    </div>
  )
}

export default MyFridgeList
