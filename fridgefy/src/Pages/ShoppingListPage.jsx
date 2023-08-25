import FavoriteRecipeList from "../Components/shoppingList/FavoritesRecipeList";
import ItemsBuyList from "../Components/shoppingList/ItemsBuyList";
import styled from "styled-components";
import Header from "../Components/common/Header";
import MyFridgeComponent from "../Components/common/MyFridgeComponent";
import FooterComponent from "../Components/common/FooterComponent";
function ShoppingList() {
	return (
		<>
			<Header />
			<SoppingListDiv>
				<MyFridgeComponent />
				<FavoriteRecipeList />
				<div className="itemsBuyList">
					<h2>Item to buy</h2>
					<ItemsBuyList />
				</div>
			</SoppingListDiv>
			<FooterComponent />
		</>
	);
}

export default ShoppingList;

const SoppingListDiv = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	/* justify-content: space-between; */
	.itemsBuyList {
		width: 25vw;
		display: flex;
		flex-direction: column;
		h2 {
			text-align: center;
			font-family: "DM Mono", monospace;
			font-weight: 400;
			font-size: 1.6rem;
		}
	}
`;
