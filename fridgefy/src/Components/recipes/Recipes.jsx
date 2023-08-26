import { useState, useEffect } from "react";
import RecipesList from "./RecipesList";
import styled from "styled-components";
import RecipesFilterContainer from "./RecipesFilterContainer";
import axios from "axios";
import RecipesAutoSearch from "./RecipesAutoSearch";

function Recipes() {
	const key = "5bd0456a9ef9416eb164f5581de91628";
	const nOfRecipes = 2;
	const baseURL = `https://api.spoonacular.com/recipes/random/?apiKey=${key}&number=${nOfRecipes}`;
	const [recipesList, setRecipesList] = useState([]);
	const [items, setItems] = useState([]);
	const [searchItem, setSearchedItem] = useState([]);

	useEffect(() => {
		if (Object.values(searchItem).length < 2) {
			getRandomRecipes();
		} else {
			getSearchedRecipe(searchItem.id);
		}
	}, [searchItem]);


	const getRandomRecipes = () => {
		setItems([]);
		axios.get(baseURL).then((response) => {
			response.data.recipes.map((recipe) => {
				setItems((prev) => {
					return [...prev, { id: recipe.id, name: recipe.title }];
				});
			});
			setRecipesList(response.data.recipes);
		});
	};

	const getSearchedRecipe = (id) => {
		const result = Object.values(recipesList).filter((key) => {
			return key.id === id;
		});
		return setRecipesList(result);
	};

	const getOptionsToSearch = (list) => {
		setItems([]);
		list.map((recipe) => {
			console.log("Recipe", recipe);
			setItems((prev) => {
				return [...prev, { id: recipe.id, name: recipe.title }];
			});
		});
		console.log("Items", items);
	};

	return (
		<StyledDiv>
			<div style={{ position: "relative" }}>
				<RecipesAutoSearch
					style={{ position: "absolute", zIndex: 99 }}
					list={items}
					setSearchedItem={setSearchedItem}
				/>
			</div>
			<RecipesFilterContainer
				list={recipesList}
				setList={setRecipesList}
				setRandomList={getRandomRecipes}
				setOptions={getOptionsToSearch}
			/>
			<RecipesList list={recipesList} />
		</StyledDiv>
	);
}

export default Recipes;

const StyledDiv = styled.div`
	width: 50vw;
	padding: 1rem 1rem 0;
`;
