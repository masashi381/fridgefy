import recipes from "../../backend/data/recipes.json";
import { useState, useEffect } from "react";
import RecipesList from './RecipesList'
import styled from "styled-components"
import RecipesFilterContainer from "./RecipesFilterContainer";
import axios from 'axios'


function Recipes(props) {

    const key = import.meta.env.VITE_SERVER_API_KEY
    const nOfRecipes = 1;
    const baseURL = `https://api.spoonacular.com/recipes/random/?apiKey=${key}&number=${nOfRecipes}`
    const [recipesList, setRecipesList] = useState([])
    

    console.log("recipesList", recipesList)



    useEffect(()=>{
            axios.get(baseURL).then((response)=>{
                // setRecipesList(response.data.recipes)

            })

            setRecipesList(recipes.recipes)
    },[])

    

    return (
        <>
        <RecipesFilterContainer list={recipesList} setList={setRecipesList}/>
        <RecipesList list={recipesList}/>
        </>
    );
}

export default Recipes;

const StyledContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center
    
`