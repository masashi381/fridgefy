import styled from "styled-components";
import { useContext, useState } from "react";

import ItemsBuy from "./ItemsBuy";
import { FavoritesRecipes } from "../../Context/FavoritesRecipesContext";
import { MyFridgeContext } from "../../Context/MyFridgeContext";

export default function ItemsBuyList() {
	const [checkItems, setCheckItems] = useState([]);

	const { favoriteRecipes } = useContext(FavoritesRecipes);
	const { fridge } = useContext(MyFridgeContext);
	const newItems = [];

	console.log("fridge", fridge);

	favoriteRecipes.forEach((recipe) => {
		recipe.extendedIngredients.forEach((ingredient) => {
			newItems.push(ingredient.name);
		});
	});

	const checkExistingIngredients = newItems.filter((element) => {
		if (!fridge.includes(element)) {
			return newItems;
		}
	});

	const uniqueIngredient = [...new Set(checkExistingIngredients)];
	return (
		<ul>
			<ItemsBuy contents={uniqueIngredient} />
		</ul>
	);
}

const Div = styled.div`
	width: 20vw;
`;
