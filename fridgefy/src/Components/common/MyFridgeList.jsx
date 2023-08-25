import React, { useContext, useState } from "react";
import { MyFridgeContext } from "../../Context/MyFridgeContext";
import styled from "styled-components";
import MyFridgeItem from "./MyFridgeItem";
import { User } from "../../Context/UserContext";

function MyFridgeList() {
  const { fridge, setFridge } = useContext(MyFridgeContext);
  const { user } = useContext(User);

  const onDelete = (ingredient) => {

    const fridgeArr=JSON.parse(localStorage.getItem(user.email))["fridge"]
    const recipesArr=JSON.parse(localStorage.getItem(user.email))["recipes"]

    fridgeArr.forEach(val=>{
      if(val.name==ingredient){
        fridgeArr.splice(fridgeArr.indexOf(val) ,1)

        const obj={
          fridge: fridgeArr,
          recipes: recipesArr
        }

        localStorage.setItem(user.email, JSON.stringify(obj))
      }
    })

    const updatedList = fridge.filter((item) => item.name !== ingredient);
    setFridge(updatedList);
  };

  return Object.values(fridge).map((element, index) => {

    return (
      <MyFridgeItem
        ingredient={element.name}
        key={index}
        setFridge={setFridge}
        fridge={fridge}
        onDelete={onDelete}
        isChecked={element.checked}
      />
    );
  });
}
const DeleteButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  justify-content: space-between;
  flex-wrap: nowrap;
`;
const ListElement = styled.li`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  padding-left: 0;
`;

const ListItems = styled.ul`
  list-style: none;
  left: 0;
  padding: 0;
  width: 50%;
`;
export default MyFridgeList;
