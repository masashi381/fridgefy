import { useState } from "react";
import FavoriteBtnContainer from "./FavoriteBtnContainer";
import FavoriteRecipeInfo from "./FavoriteRecipeInfo";

function FavoriteRecipeItem({ title, content, image }){
  const [isActive, setActive] = useState(false);
  const [deleteActive, setDeleteActive] = useState(true);

  return(
    <div>
      {deleteActive && <div>
        <div>
          <h3>{title}</h3>
          <FavoriteBtnContainer isActive={isActive} setActive={setActive} setDeleteActive={setDeleteActive}/>
        </div>
        {isActive && <FavoriteRecipeInfo content={content} image={image}/>}
      </div>
      }          
    </div>
  )
};

export default FavoriteRecipeItem;