import styled from "styled-components";
import { useContext } from "react";

import ItemsBuy from "./ItemsBuy";
import { FavoritesRecipes } from "../../Context/FavoritesRecipesContext";
import { MyFridgeContext } from "../../Context/MyFridgeContext";

export default function ItemsBuyList() {
	const { state } = useContext(FavoritesRecipes);
	const { fridge } = useContext(MyFridgeContext);
	const newItems = [];


	state.forEach((recipe) => {
		recipe.extendedIngredients.forEach((ingredient) => {
			newItems.push(ingredient.name);
		});
	});

	const checkExistingIngredients = newItems.filter((element) => {
		const fridgeArray = Object.keys(fridge).map((key) => fridge[key].name);
		if (!fridgeArray.includes(element)) {
			return newItems;
		}
	});

	const uniqueIngredient = [...new Set(checkExistingIngredients)];
	return (
		<Div>
			<h3>Items to buy</h3>
			<Ul>
				<ItemsBuy contents={uniqueIngredient} />
			</Ul>
		</Div>
	);
}

const Div = styled.div`
	width: 30vw;
	h3 {
		text-align: center;
	}
`;

const Ul = styled.ul`
	padding-left: 0;
`;