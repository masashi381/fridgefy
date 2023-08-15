function FavoriteRecipeInfo({content, image}){
  return(
    <div>
    <p>{content}</p>
    <img src={image} alt="" />
    </div>
  )
};

export default FavoriteRecipeInfo;