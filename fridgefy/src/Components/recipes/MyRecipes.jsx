import Styled from "styled-components";
import { useState, useContext } from "react";
import { FavoritesRecipes,FavoritesRecipesContext } from "../../Context/FavoritesRecipesContext";

export default function MyRecipesSec(){
    const { state, dispatch } = useContext(FavoritesRecipes);
    
    const deleteRecipe = (id) => {
        dispatch({ type: "delete", id: id });
	};

    return (
        <MyRecipeSection>
            <h3>My Recipes</h3>
            <MyRecipeUl>
                {state.map((item,index)=>(

                    <MyRecipeLi>
                        <div key={index}>{item.title}</div>
                        <i className="fa-solid fa-trash" onClick={()=>deleteRecipe(item.id)}></i>
                    </MyRecipeLi>
                ))}
            </MyRecipeUl>
        </MyRecipeSection>
    )
}

const MyRecipeSection=Styled.section`
    width: 300px;
    padding: 0;
    h3 {
        text-align: center;
    }
`;

const MyRecipeUl=Styled.ul`
    padding: 0;

`;

const MyRecipeLi=Styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    width: fit-content;
    padding: 5px 0;
    
    div {
        width: 90%;
        margin-right: 20px;
    };

`;