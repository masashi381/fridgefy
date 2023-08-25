import FavoriteRecipeList from "../Components/shoppingList/FavoritesRecipeList";
import ItemsBuyList from "../Components/shoppingList/ItemsBuyList";
import styled from "styled-components";
import Header from "../Components/common/Header";
import MyFridgeComponent from "../Components/common/MyFridgeComponent";
import FooterComponent from "../Components/common/FooterComponent";
function ShoppingList() {
	return (
		<>
			<Header></Header>
			<SoppingListDiv>
				<MyFridgeComponent />
				<FavoriteRecipeList />
				<Div>
				<ItemsBuyList />
				</Div>
			</SoppingListDiv>
			<FooterComponent />
		</>
	);
}

export default ShoppingList;

const SoppingListDiv = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	justify-content: space-between;
`;

const Div = styled.div`
	display: flex;
	flex-direction: column;
`
