import FavoriteRecipeList from "../Components/shoppingList/FavoritesRecipeList";
import ItemsBuyList from "../Components/shoppingList/ItemsBuyList";
<<<<<<< HEAD
// import MyFridgeInput from "../Components/common/MyFridgeInput";
// import MyFridgeList from "../Components/common/MyFridgeList";
=======
import MyFridgeInput from "../Components/common/MyFridgeInput";
import MyFridgeList from "../Components/common/MyFridgeList";

>>>>>>> a8dbe421178e4e9cc534f5c550763c06b4f5c46c

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
