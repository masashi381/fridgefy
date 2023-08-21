import styled from "styled-components";
import { useContext } from "react";

import FavoriteRecipeItem from "./FavoriteRecipeItem";
import { FavoritesRecipes } from "../../Context/FavoritesRecipesContext";

function FavoriteRecipeList() {
	// const { favoriteRecipes } = useContext(FavoritesRecipes);
	const { state } = useContext(FavoritesRecipes);
	console.log("stateUpdated", state);
	return (
		<FavoriteRecipeDiv>
			{state.map((recipe) => (
				<FavoriteRecipeItem
					key={recipe.id}
					recipe={recipe}
					// title={recipe.title}
					// content={recipe.instructions}
					// image={recipe.image}
				/>
			))}
		</FavoriteRecipeDiv>
	);
}

export default FavoriteRecipeList;

const FavoriteRecipeDiv = styled.div`
	width: 60vw;
	margin: 0 auto;
`;
