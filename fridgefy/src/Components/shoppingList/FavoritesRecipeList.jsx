import FavoriteRecipeItem from "./FavoriteRecipeItem";
import data from "../../backend/data/recipes.json"

function FavoriteRecipeList() {
  
  return(
    <div>
      {data.recipes.map((recipe) => (
        <FavoriteRecipeItem key={recipe.id} title={recipe.title} content={recipe.instructions} image={recipe.image}/>
      ))}
    </div>
  )
};

export default FavoriteRecipeList;

