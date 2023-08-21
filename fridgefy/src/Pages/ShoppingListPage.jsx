import FavoriteRecipeList from "../Components/shoppingList/FavoritesRecipeList";
import ItemsBuyList from "../Components/shoppingList/ItemsBuyList";
import MyFridgeInput from "../Components/common/MyFridgeInput";
import MyFridgeList from "../Components/common/MyFridgeList"

import styled from "styled-components";
import Header from "../Components/common/Header";

function ShoppingList() {
	return (
		<>
			<Header></Header>
			<SoppingListDiv>
				<MyFridgeInput />
				<MyFridgeList />
				<FavoriteRecipeList />
				<ItemsBuyList />
			</SoppingListDiv>
		</>
	);
}

export default ShoppingList;

const SoppingListDiv = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;
