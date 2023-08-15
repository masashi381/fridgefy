import FavoriteRecipeList from "./FavoritesRecipeList";
import styled from "styled-components";


function ShoppingList() {
  return (
    <SoppingListDiv>
      {/* <MyFridge/> */}
      <FavoriteRecipeList/>
      {/* <ItemsBuyList/> */}
    </SoppingListDiv>
  )
};

export default ShoppingList;

const SoppingListDiv = styled.div`
  width: 100%;
  margin: 0 auto;
`
