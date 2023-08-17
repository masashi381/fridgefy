import ItemsBuy from "./ItemsBuy";
import ItemsData from "../../backend/data/recipes.json";
import styled from "styled-components";

export default function ItemsBuyList() {
	const newItems = [];

	ItemsData.recipes.forEach((recipe) => {
		recipe.extendedIngredients.forEach((ingredient) => {
			newItems.push(ingredient.name);
		});
	});

	const uniqueIngredient = [...new Set(newItems)];
	console.log("newItems: ", newItems);
	console.log("uniqueIngredient: ", uniqueIngredient);
	return (
		<ul>
			{/* {newItems.map((items) => (
				<ItemsBuy contents={items} />
			))} */}
		</ul>
	);
}

const Div = styled.div`
	width: 20vw;
`;
