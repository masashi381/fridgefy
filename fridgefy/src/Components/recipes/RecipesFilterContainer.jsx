import { useState, useReducer, useEffect, useContext } from "react";
import RecipesFilter from "./RecipesFilter";
import axios from 'axios'
import {  MyFridgeContext } from '../../Context/MyFridgeContext';

function RecipesFilterContainer({ list, setList, setRandomList, setOptions }) {

  const [innerState, setInnerState] = useState([])
  const { fridge } = useContext(MyFridgeContext);  

  useEffect(()=>{
    setList(innerState)
    setOptions(innerState)

    

  },[innerState])



  const optionFilters = [
    {
      cuisine: [],
    },
    {
      diet: [],
    },
    {
      intolerances: [],
    },
  ];

  const filtersReducer = (state, action) => {
    switch (action.type) {
      case "cuisine":
        return state.map((filter) => {
          if (Object.keys(filter)[0] === action.type) {
            return { ...filter, cuisine: action.payload.cuisine };
          } else {
            return filter;
          }
        });
      default:
        return state;
      case "diet":
        return state.map((filter) => {
          if (Object.keys(filter)[0] === action.type) {
            return { ...filter, diet: action.payload.diet };
          } else {
            return filter;
          }
        });
      case "intolerances":
        return state.map((filter) => {
          if (Object.keys(filter)[0] === action.type) {
            return { ...filter, intolerances: action.payload.intolerances };
          } else {
            return filter;
          }
        });
    }
  };

  const [filters, dispatch] = useReducer(filtersReducer, optionFilters);

  const cuisines = [
    "African",
    "Asian",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ];

  const optionsCuisine = [];
  cuisines.forEach((el) => {
    optionsCuisine.push({
      value: el,
      label: el,
    });
  });

  const intolerances = [
    "Dairy",
    "Egg",
    "Gluten",
    "Grain",
    "Peanut",
    "Seafood",
    "Sesame",
    "Shellfish",
    "Soy",
    "Sulfite",
    "Tree Nut",
    "Wheat",
  ];

  const optionsIntolerances = [];
  intolerances.forEach((el) => {
    optionsIntolerances.push({
      value: el,
      label: el,
    });
  });

  const diets = [
    "gluten free",
    "dairy free",
    "ketogenic",
    "vegan",
    "paleolithic",
    "lacto ovo vegetarian",
    "vegetarian",
  ];

  const optionsDiets = [];
  diets.forEach((el) => {
    optionsDiets.push({
      value: el,
      label: el,
    });
  });


  const mountStringFilter = (obj) => {
    let result = ""
    let query = Object.keys(obj).toString()
    Object.values(obj).forEach((el, key)=>{
      Object.values(el).map((subEl, key)=>{
          if(result === ""){
            result = query + "=" + subEl.value
          }
          else{
            result = result + "&" + subEl.value
          }
      })
    })
    
    if(result === query) {
      return ""
    } else {
      console.log(result)
      return result
    }
  }


  const checkedFrigeItems = () =>{
    let result = "";
    Object.keys(fridge).map((key)=>{
      if(fridge[key].checked){
          if(result === ""){
            result = "&" + result +"includeIngredients=" + fridge[key].name
          } else {
            result = result + "," + fridge[key].name
          }
      } 
    })
    return result;
  }


  const submitRequest = () => {

    
    setInnerState([]);
    
    let queryIngredients = checkedFrigeItems()
    if(filters[0].cuisine.length === 0 && filters[1].diet.length === 0 && filters[2].intolerances.length === 0){      
      return setRandomList()
    }


    console.log("GET");
    const key = import.meta.env.VITE_SERVER_API_KEY
    let cuisines = mountStringFilter(filters[0])
    let diets = mountStringFilter(filters[1])
    let intolerances = mountStringFilter(filters[2])

    let baseUrl = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&fillIngredients=true&apiKey=${key}&${cuisines ? cuisines+"&" : ""}${diets ? diets+"&" : ""}${intolerances ? intolerances+"&": ""}`
    baseUrl = baseUrl.substring(0, baseUrl.length - 1)+queryIngredients;

    
    let nOfRecipes = 2;
    
    axios.get(`${baseUrl}&number=${nOfRecipes}`).then((response)=>{
      response.data.results.map((result)=>{
          setInnerState((prev)=>{
            return [...prev, result]
          })
        console.log("result", result)

      })
    })

    

  };


  const getRecipeInformation = async (response) => {
    let recipesInformationList = []
    const key = import.meta.env.VITE_SERVER_API_KEY

    await response.data.results.map((result)=>{
        let url = `https://api.spoonacular.com/recipes/${result.id}/information?apiKey=${key}`
        
        axios.get(url).then((response)=>{
          console.log("Response inside newFn", response.data)
          recipesInformationList.push(response.data)
        })
      })
      console.log("recipesList", recipesInformationList)
      return recipesInformationList
  }

  return (
    <>
      <RecipesFilter
        name="cuisine"
        options={optionsCuisine}
        dispatch={dispatch}
      />
      <RecipesFilter
        name="intolerances"
        options={optionsIntolerances}
        dispatch={dispatch}
      />
      <RecipesFilter 
        name="diet" 
        options={optionsDiets} 
        dispatch={dispatch} 
      />
      <button onClick={submitRequest}>Filter</button>
    </>
  );
}

export default RecipesFilterContainer;
