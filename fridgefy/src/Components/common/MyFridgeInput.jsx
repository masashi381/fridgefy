import React, { useContext, useState } from 'react';
import { MyFridgeContext } from '../../Context/MyFridgeContext';
import styled from 'styled-components';
import dummyIngredients from '../../../assets/data/ingredients.json'
function MyFridgeInput() {
  const { fridge, addIngredientToFridge } = useContext(MyFridgeContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestedIngredients, setSuggestedIngredients] = useState([""]);
  
  
  function clearInput(){
    setSearchQuery(" ");
  }

  const handleAddToFridge = () => {
    const ingredientValue = document.querySelector("input").value;
    if (ingredientValue) {
      if(!fridge.includes(ingredientValue) && ingredients.includes(ingredientValue)) {
        addIngredientToFridge(ingredientValue, false);
      } else if (fridge.includes(ingredientValue)) {
        alert("Ingredient already in the fridge");
        clearInput();
      }
    } if (!ingredients.includes(ingredientValue)){
      alert("Not an Ingredient")
      clearInput();
    };
    clearInput();
  };
  
  let ingredients = [];
  const uniqueIngredients = new Set();
    dummyIngredients.forEach((element) => {
      const ingredientName = element.ingredient;
      if (
        !uniqueIngredients.has(ingredientName) &&
        ingredientName.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          uniqueIngredients.add(ingredientName);
          ingredients.push(ingredientName);
        }
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
      <datalist  id="ingredient-list">
        {suggestedIngredients.filter((item, index) => index <= 4).map((ingredient, index) => (
          <Options key={index} value={ingredient}/>
        ))}
      </datalist>
     </div>
  );
};

const ButtonStyle = styled.button`
  display: inline-block;
  background-color: gray;
  box-shadow: 2px 2px black;
  color: white;
  margin-left: .5rem;
  border-radius: 25px;
`
const Options = styled.option`
  background-color: black;
`
export default MyFridgeInput;
