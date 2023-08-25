import { useState } from "react";
import FavoriteBtnContainer from "./FavoriteBtnContainer";
import FavoriteRecipeInfo from "./FavoriteRecipeInfo";
import styled from "styled-components";

function FavoriteRecipeItem({ recipe }) {
	const [isActive, setActive] = useState(false);
	const [deleteActive, setDeleteActive] = useState(true);

	return (
		<>
			{deleteActive && (
				<RecipeContainer>
					<div className="inner">
						<h3>{recipe.title}</h3>
						<FavoriteBtnContainer
							isActive={isActive}
							setActive={setActive}
							setDeleteActive={setDeleteActive}
							recipe={recipe}
						/>
					</div>
					{isActive && <FavoriteRecipeInfo recipe={recipe} />}
				</RecipeContainer>
			)}
		</>
	);
}

export default FavoriteRecipeItem;

const RecipeContainer = styled.div`
	width: 100%;
	.inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid black;
		border-radius: 0.5rem;
		background-color: #1982c4;
		margin-bottom: 1rem;
		h3 {
			padding-left: 1rem;
			margin: 0.5rem 0;
			font-family: "DM Mono", monospace;
			font-weight: 400;
			font-size: 1.6rem;
			color: #fff;
		}
	}
`;
