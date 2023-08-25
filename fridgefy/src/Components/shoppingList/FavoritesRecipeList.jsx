import styled from "styled-components";
import { useContext } from "react";

import FavoriteRecipeItem from "./FavoriteRecipeItem";
import { FavoritesRecipes } from "../../Context/FavoritesRecipesContext";

function FavoriteRecipeList() {
	const { state } = useContext(FavoritesRecipes);
	return (
		<FavoriteRecipeDiv>
			{state.map((recipe) => (
				<FavoriteRecipeItem key={recipe.id} recipe={recipe} />
			))}
		</FavoriteRecipeDiv>
	);
}

export default FavoriteRecipeList;

const FavoriteRecipeDiv = styled.div`
	width: 50vw;
	height: 100%;
	padding: 10px;
	margin: 0;
	border: 2px solid #ccc;
	border-radius: 1rem;
`;
