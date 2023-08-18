import styled from "styled-components";
import { useContext } from "react";

import FavoriteRecipeItem from "./FavoriteRecipeItem";
import { FavoritesRecipes } from "../../Context/FavoritesRecipesContext";

function FavoriteRecipeList() {
	const { favoriteRecipes } = useContext(FavoritesRecipes);
	return (
		<FavoriteRecipeDiv>
			{favoriteRecipes.map((recipe) => (
				<FavoriteRecipeItem
					key={recipe.id}
					title={recipe.title}
					content={recipe.instructions}
					image={recipe.image}
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
