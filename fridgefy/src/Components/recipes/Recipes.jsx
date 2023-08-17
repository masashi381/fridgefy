import recipes from "../../backend/data/recipes.json";
import { useState, useEffect } from "react";
import RecipesList from './RecipesList'


function Recipes(props) {

    const key = import.meta.env.VITE_SERVER_API_KEY
    const nOfRecipes = 2;
    const baseURL = `https://api.spoonacular.com/recipes/random/?apiKey=${key}&number=${nOfRecipes}`
    const [recipesList, setRecipesList] = useState([])




    useEffect(()=>{
            // axios.get(baseURL).then((response)=>{
            //     setRecipesList(response.data)
            // })

            // const recipe = {
            //     vegetarian: false,
            //     vegan: false,
            //     glutenFree: false,
            //     dairyFree: false,
            //     veryHealthy: false,
            //     cheap:false,
            //     ingredients: [
            //         {
            //             id: "",
            //             originalName: "",

            //         }
            //     ],
            //     id: "",
            //     title: "",
            //     image:"",
            //     cuisines:[],
            //     dishTypes: [],
            //     diets: [],
            //     instructions: "",

            // }
            setRecipesList(recipes.recipes)
    })

    

    return (
        <RecipesList list={recipesList}/>
    );
}

export default Recipes;