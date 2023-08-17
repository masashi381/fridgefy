import { useState } from "react";
import FavoriteBtnContainer from "./FavoriteBtnContainer";
import FavoriteRecipeInfo from "./FavoriteRecipeInfo";
import styled from "styled-components";

function FavoriteRecipeItem({ title, content, image }){
  const [isActive, setActive] = useState(false);
  const [deleteActive, setDeleteActive] = useState(true);

  return(
    <div>
      {deleteActive && <div>
        <FlexDiv>
          <h3>{title}</h3>
          <FavoriteBtnContainer isActive={isActive} setActive={setActive} setDeleteActive={setDeleteActive}/>
        </FlexDiv>
        {isActive && <FavoriteRecipeInfo content={content} image={image}/>}
      </div>
      }          
    </div>
  )
};

export default FavoriteRecipeItem;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`