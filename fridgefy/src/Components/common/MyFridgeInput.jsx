import React, { useContext, useState } from "react";
import { MyFridgeContext } from "../../Context/MyFridgeContext";
import dummyData from "../../backend/data/recipes.json";
import styled from "styled-components";

function MyFridgeInput() {
	const { fridge, addIngredientToFridge } = useContext(MyFridgeContext);

	const [searchQuery, setSearchQuery] = useState("");
	const [suggestedIngredients, setSuggestedIngredients] = useState([]);

	const handleAddToFridge = () => {
		const ingredientValue = document.querySelector("input").value;
		if (ingredientValue) {
			if (!fridge.includes(ingredientValue) && ingredients.includes(ingredientValue)) {
				addIngredientToFridge(ingredientValue, false);
			} else if (fridge.includes(ingredientValue)) {
				alert("Ingredient already in the fridge");
			}
		}
		if (!ingredients.includes(ingredientValue)) {
			alert("Not an Ingredient");
		}
	};

	let ingredients = [];
	const uniqueIngredients = new Set();
	dummyData.recipes.forEach((recipe) => {
		recipe.extendedIngredients.forEach((ingredient) => {
			const ingredientName = ingredient.name;
			if (
				!uniqueIngredients.has(ingredientName) &&
				ingredientName.toLowerCase().includes(searchQuery.toLowerCase())
			) {
				uniqueIngredients.add(ingredientName);
				ingredients.push(ingredientName);
			}
		});
	});

	const handleInputChange = (e) => {
		const inputValue = e.target.value;
		setSearchQuery(inputValue);
		const suggested = ingredients.filter((ingredient) =>
			ingredient.toLowerCase().includes(inputValue.toLowerCase())
		);
		setSuggestedIngredients(suggested);
	};
	// console.log(ingredients);

	return (
		<StyledDiv>
			<input
				type="text"
				placeholder="Search ingredient..."
				value={searchQuery}
				onChange={handleInputChange}
				list="ingredient-list"
			/>
			<button id="AddFridgeButton" onClick={handleAddToFridge}>
				Add to Fridge
			</button>
			<datalist id="ingredient-list">
				{suggestedIngredients.map((ingredient, index) => (
					<option key={index} value={ingredient} />
				))}
			</datalist>
		</StyledDiv>
	);
}
export default MyFridgeInput;

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 1rem;
	input {
		border-radius: 0.5rem;
		/* border: none; */
	}
	button {
		background-color: #ffca3a;
		box-shadow: 2px 2px black;
		margin-left: 0.5rem;
		border-radius: 2.5rem;
	}
`;
