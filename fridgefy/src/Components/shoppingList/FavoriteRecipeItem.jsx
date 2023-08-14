import { useState } from "react";
import FavoriteBtnContainer from "./FavoriteBtnContainer";
import FavoriteRecipeInfo from "./FavoriteRecipeInfo";

function FavoriteRecipeItem({ title, content }){
  const [isActive, setActive] = useState(false);
  function accordionHandler(){
    setActive(!isActive);
  };

  return(
    <div>
      <div onClick={accordionHandler}>
        <h3>{title}</h3>
        <FavoriteBtnContainer />
        {/* <span>{isActive ? "-" : "+"}</span> */}
      </div>
      {isActive && <FavoriteRecipeInfo/>}
    </div>
  )
};

export default FavoriteRecipeItem;