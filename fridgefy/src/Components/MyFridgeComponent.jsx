import React, { useContext, useState } from 'react';
import { MyFridge, MyFridgeContext } from '../Context/MyFridgeContext';
import dummyData from '../backend/data/recipes.json';
import styled from 'styled-components';

function MyFridgeComponent() {
  const { fridge, addIngredientToFridge } = useContext(MyFridgeContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestedIngredients, setSuggestedIngredients] = useState([]);
  
  
  const handleAddToFridge = (ingredient) => {
    const ingredientValue = document.querySelector("input").value;
    // console.log(ingredientValue);
    addIngredientToFridge(ingredientValue);
    // console.log("event")
    
  };
  
  let ingredients = [];
  const uniqueIngredients = new Set();
  dummyData.recipes.forEach((recipe) => {
    recipe.extendedIngredients.forEach((ingredient) => {
      const ingredientName = ingredient.name;
      if (
        !uniqueIngredients.has(ingredientName) &&
        ingredientName.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          uniqueIngredients.add(ingredientName);
          ingredients.push(ingredientName);
        }
      });
    });

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
    const suggested = ingredients.filter((ingredient) =>
      ingredient.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestedIngredients(suggested);
  };
  // console.log(ingredients);

  return (
    <div>
      <input
        type="text"
        placeholder="Search ingredient..."
        value={searchQuery}
        onChange={handleInputChange}
        list="ingredient-list"
      />
      <ButtonStyle id="AddFridgeButton" onClick={handleAddToFridge}>Add to Fridge</ButtonStyle>
      <datalist id="ingredient-list">
        {suggestedIngredients.map((ingredient, index) => (
          <option key={index} value={ingredient} />
        ))}
      </datalist>
     </div>
  );
}

const ButtonStyle = styled.button`
  display: inline-block;
  background-color: blue;
  color: white;
  margin-left: .5rem;
`;

const HidingUl = styled.ul`
  display: none
  
`

export default MyFridgeComponent;
