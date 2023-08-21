import recipes from "../../backend/data/recipes.json";
import { useState, useEffect } from "react";
import RecipesList from './RecipesList'
import styled from "styled-components"
import RecipesFilterContainer from "./RecipesFilterContainer";
import axios from 'axios'
import RecipesAutoSearch from "./RecipesAutoSearch";


function Recipes() {

    const key = import.meta.env.VITE_SERVER_API_KEY
    const nOfRecipes = 2;
    const baseURL = `https://api.spoonacular.com/recipes/random/?apiKey=${key}&number=${nOfRecipes}`
    const [recipesList, setRecipesList] = useState([])
    const [items, setItems] = useState([])
    const [searchItem, setSearchedItem] = useState([])
    
    useEffect(()=>{
            console.log("useEffect")
            console.log("searchedItem", searchItem)
            console.log("recipesLIst", recipesList)

            if(Object.values(searchItem).length < 2){
                getRandomRecipes()
                // setRecipesList(recipes.recipes)
            } else {
                getSearchedRecipe(searchItem.id)
            }            
    },[searchItem])

    
    const getRandomRecipes = () => {
        setItems([])
        axios.get(baseURL).then((response)=>{
            response.data.recipes.map((recipe)=>{
                setItems((prev)=>{
                    return [...prev, {id: recipe.id, name: recipe.title}]
                }) 
            })
            setRecipesList(response.data.recipes)
        })
    }

    const getSearchedRecipe = (id) =>{    
        const result = Object.values(recipesList).filter((key)=>{
            console.log(key.id === id)
            return key.id === id;
        })
        return setRecipesList(result)
    }

    return (
        <>
        <RecipesFilterContainer list={recipesList} setList={setRecipesList} setRandomList={getRandomRecipes}/>
        <RecipesList list={recipesList}/>
        <RecipesAutoSearch list={items} setSearchedItem={setSearchedItem}/>
        </>
    );
}

export default Recipes;

const StyledContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center
    
`