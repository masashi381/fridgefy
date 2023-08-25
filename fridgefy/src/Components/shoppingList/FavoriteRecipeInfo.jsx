import styled from "styled-components";

import parse from 'html-react-parser';



function FavoriteRecipeInfo({ recipe }) {

	console.log("recipeIns", recipe.instructions)

	
	return (
		<FlexDiv>
			<ContentP>{parse(recipe.instructions)}</ContentP>
			<Img src={recipe.image} alt="" />
		</FlexDiv>
	);
}

export default FavoriteRecipeInfo;

const FlexDiv = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid black;
	padding: 10px;
`;

const ContentP = styled.p`
	width: 400px;
`;

const Img = styled.img`
	width: 200px;
	height: 200px;
	object-fit: cover;
`;
