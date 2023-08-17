import FavoriteRecipeList from "../Components/shoppingList/FavoritesRecipeList";
import ItemsBuyList from "../Components/shoppingList/ItemsBuyList";
import { MyFridge } from "../Context/MyFridgeContext";
import MyFridgeComponent from "../Components/MyFridgeComponent";
import MyFridgeList from "../Components/MyFridgeList";
import styled from "styled-components";


function ShoppingList() {
  return (
    <SoppingListDiv>
      <MyFridge>
          <MyFridgeComponent />
          <MyFridgeList />
      </MyFridge>
      <FavoriteRecipeList/>
      <ItemsBuyList/>
    </SoppingListDiv>
  )
};

export default ShoppingList;

const SoppingListDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
