import { useState } from "react";
import FavoriteBtnContainer from "./FavoriteBtnContainer";
import FavoriteRecipeInfo from "./FavoriteRecipeInfo";
import styled from "styled-components";

function FavoriteRecipeItem({ recipe }) {
	const [isActive, setActive] = useState(false);
	const [deleteActive, setDeleteActive] = useState(true);

	return (
		<div>
			{deleteActive && (
				<div>
					<FlexDiv>
						<h3>{recipe.title}</h3>
						<FavoriteBtnContainer
							isActive={isActive}
							setActive={setActive}
							setDeleteActive={setDeleteActive}
							recipe={recipe}
						/>
					</FlexDiv>
					{isActive && <FavoriteRecipeInfo recipe={recipe} />}
				</div>
			)}
		</div>
	);
}

export default FavoriteRecipeItem;

const FlexDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid black;
	background-color: rgb(212, 210, 210);
	margin-bottom: 10px;
	h3 {
		padding-left: 10px;
	}
`;
