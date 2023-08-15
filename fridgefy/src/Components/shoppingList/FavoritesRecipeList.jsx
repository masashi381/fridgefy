import FavoriteRecipeItem from "./FavoriteRecipeItem";
import data from "../../backend/data/recipes.json";
import styled from "styled-components";

function FavoriteRecipeList() {
  
  return(
    <FavoriteRecipeDiv>
      {data.recipes.map((recipe) => (
        <FavoriteRecipeItem key={recipe.id} title={recipe.title} content={recipe.instructions} image={recipe.image}/>
      ))}
    </FavoriteRecipeDiv>
  )
};

export default FavoriteRecipeList;

const FavoriteRecipeDiv = styled.div`
  width: 60vw;
  margin: 0 auto;
`