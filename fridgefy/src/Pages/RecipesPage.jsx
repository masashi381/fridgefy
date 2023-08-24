import Header from "../Components/common/Header";
import Recipes from "../Components/recipes/Recipes";
import MyFridgeComponent from "../Components/common/MyFridgeComponent";
import MyRecipesSec from "../Components/recipes/MyRecipes";
import styled from "styled-components";
import FooterComponent from "../Components/common/FooterComponent";

export default function RecipesPageSection() {
	return (
		<section>
			<Header />
			<RecipesPageDiv>
				<MyFridgeComponent />
				<Recipes />
				<MyRecipesSec />
			</RecipesPageDiv>
			<FooterComponent />
		</section>
	);
}

const RecipesPageDiv = styled.div`
	display: flex;
	justify-content: space-between;
	width: 98vw;
	height: 80vh;
	margin: 0 auto;
`;
