import React, { useContext } from "react";
import { User } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { FavoritesRecipes } from "../../Context/FavoritesRecipesContext";
import { MyFridgeContext } from "../../Context/MyFridgeContext";

function Header(props) {
  const { googleSignIn, googleLogOut, user } = useContext(User);
  const { dispatch } = useContext(FavoritesRecipes);
  const { setFridge } = useContext(MyFridgeContext);

  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (e) {
      console.log(e);
    }
  };

  const handleGoogleLogOut = async () => {
    dispatch({ type: "deleteAll", payload: null });
    setFridge([]);
    try {
      await googleLogOut();
    } catch (e) {
      console.log(e);
    }
  };

    const handleclick = (local) => {
      
    navigate(`/${local}`)
  }

  if (!user) {
    return (
        <StyledDiv>
            <h1>Fridgefy</h1>
            <StyledButton onClick={handleGoogleSignIn}>LOGIN</StyledButton>        
        </StyledDiv>
    
    );
  }

  return (
      <StyledDiv>
        <h1>FridgeFy</h1>
      <StyledLinksContainer>
        
        <button onClick={()=>{
          navigate('/home')
        }}>Home
        </button>

        <button onClick={()=>{
          navigate('/recipes')
        }}>
          Recipes
        </button>
        
        <button onClick={()=>{
          navigate('/shoppinglist')
        }}>
          Shopping List
        </button>
      </StyledLinksContainer>
      <div>

      <div>Hi, {user.displayName}</div>
      <button onClick={handleGoogleLogOut}>LOGOUT</button>
      </div>
    
      </StyledDiv>
  );
}

export default Header;

const StyledDiv = styled.div`
    background: #40b5c9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
`

const StyledButton = styled.button`
    height: 100%;
    font-family: 'DM Mono', monospace;
    cursor: pointer; 
`

const StyledLinksContainer = styled.div`
    display: flex;
    justify-content: space-between
`
