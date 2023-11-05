import FavoriteRecipeList from "../Components/shoppingList/FavoritesRecipeList";
import ItemsBuyList from "../Components/shoppingList/ItemsBuyList";
import styled from "styled-components";
import Header from "../Components/common/Header";
import MyFridgeComponent from "../Components/common/MyFridgeComponent";
import FooterComponent from "../Components/common/FooterComponent";
function ShoppingList() {
	return (
		<>
			<Header location={"listPage"}/>
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
	min-height: 80vh;
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
	@media screen and (min-width: 834px) {
		.itemsBuyList {
			margin-bottom: 1rem;
		}
	}
	@media screen and (max-width: 375px) {
		flex-direction: column;
		.itemsBuyList {
			width: 100vw;
			order: 1;
			h2 {
				font-size: 2rem;
			}
		}
	}
`;
