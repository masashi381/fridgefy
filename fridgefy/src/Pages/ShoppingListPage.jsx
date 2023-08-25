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
			<ShoppingListDiv>
				<MyFridgeComponent />
				<FavoriteRecipeList />
				<div className="itemsBuyList">
					<h2>Item to buy</h2>
					<ItemsBuyList />
				</div>
			</ShoppingListDiv>
			<FooterComponent />
		</>
	);
}

export default ShoppingList;

const ShoppingListDiv = styled.div`
	display: flex;
	width: 100vw;
	height: 100%;
	margin-bottom: 8rem;
	.itemsBuyList {
		width: 25vw;
		padding-top: 0.5rem;
		display: flex;
		flex-direction: column;
		h2 {
			text-align: center;
			font-family: "DM Mono", monospace;
			font-weight: 400;
			font-size: 1.6rem;
			color: #6a4c93;
		}
	}
`;
