import FavoriteRecipeList from "../Components/shoppingList/FavoritesRecipeList";
import ItemsBuyList from "../Components/shoppingList/ItemsBuyList";
import styled from "styled-components";
import Header from "../Components/common/Header";
import MyFridgeComponent from "../Components/common/MyFridgeComponent";

function ShoppingList() {
	return (
		<>
			<Header></Header>
			<SoppingListDiv>
				<MyFridgeComponent/>
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
