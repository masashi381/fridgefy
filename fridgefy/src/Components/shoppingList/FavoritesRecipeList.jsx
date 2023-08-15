import FavoriteRecipeItem from "./FavoriteRecipeItem";

const demoData = [{
  title: "Recipe 1",
  content: "more information 1",
},
{
  title: "Recipe 2",
  content: "more information 2",
},
{
  title: "Recipe 3",
  content: "more information 3",
}];

function FavoriteRecipeList() {
  return(
    <div>
      {demoData.map(({title, content}, index) => (
        <FavoriteRecipeItem key={index} title={title} content={content}/>
      ))}
    </div>
  )
};

export default FavoriteRecipeList;

