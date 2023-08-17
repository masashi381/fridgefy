import FavoriteRecipeList from "../Components/shoppingList/FavoritesRecipeList";
import styled from "styled-components";
import Header from "../Components/common/Header";


function ShoppingList() {
  return (
    <>
    <Header></Header>
    <SoppingListDiv>
      {/* <MyFridge/> */}
      <FavoriteRecipeList/>
      {/* <ItemsBuyList/> */}
    </SoppingListDiv>
    </>
  )
};

export default ShoppingList;

const SoppingListDiv = styled.div`
  width: 100%;
  margin: 0 auto;
`
