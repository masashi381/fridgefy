import React, { useContext, useState } from 'react';
import { MyFridgeContext } from '../../Context/MyFridgeContext';
import styled from 'styled-components';
import dummyIngredients from '../../../assets/data/ingredients.json';
function MyFridgeInput() {
  const { fridge, addIngredientToFridge } = useContext(MyFridgeContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestedIngredients, setSuggestedIngredients] = useState(['']);

  function clearInput() {
    setSearchQuery(' ');
  }

  const handleAddToFridge = () => {
    const ingredientValue = document.querySelector('input').value;

    let fridgeIncludes = false;
    fridge.forEach((val) => {
      if (val.name == ingredientValue && fridgeIncludes == false) {
        fridgeIncludes = true;
      }
    });

    if (ingredientValue) {
      if (!fridgeIncludes && ingredients.includes(ingredientValue)) {
        addIngredientToFridge(ingredientValue, false);
      } else if (fridgeIncludes) {
        alert('Ingredient already in the fridge');
        clearInput();
      }
    }
    if (!ingredients.includes(ingredientValue)) {
      alert('Not an Ingredient');
      clearInput();
    }
    clearInput();
  };

  let ingredients = [];
  const uniqueIngredients = new Set();
  dummyIngredients.forEach((element) => {
    const ingredientName = element.ingredient;
    if (!uniqueIngredients.has(ingredientName) && ingredientName.toLowerCase().includes(searchQuery.toLowerCase())) {
      uniqueIngredients.add(ingredientName);
      ingredients.push(ingredientName);
    }
  });

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
    const suggested = ingredients.filter((ingredient) => ingredient.toLowerCase().includes(inputValue.toLowerCase()));
    setSuggestedIngredients(suggested);
  };

  return (
    <StyledDiv>
      <input
        type='text'
        placeholder='Search ingredient...'
        value={searchQuery}
        onChange={handleInputChange}
        list='ingredient-list'
      />
      <button id='AddFridgeButton' onClick={handleAddToFridge}>
        Add to Fridge
      </button>
      <datalist id='ingredient-list'>
        {suggestedIngredients
          .filter((item, index) => index <= 4)
          .map((ingredient, index) => (
            <Options key={index} value={ingredient} />
          ))}
      </datalist>
    </StyledDiv>
  );
}

export default MyFridgeInput;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  input {
    border-radius: 0.5rem;
    font-family: 'DM Mono', monospace;
    font-weight: 400;
    font-size: 1.4rem;
  }
  button {
    margin-left: 0.5rem;
    background-color: #ffca3a;
    box-shadow: 2px 2px black;
    border-radius: 2.5rem;
    cursor: pointer;
    font-family: 'DM Mono', monospace;
    font-weight: 400;
    font-size: 1.2rem;
    &:hover {
      opacity: 0.5;
    }
  }
  @media screen and (max-width: 834px) {
    flex-direction: column;
    input {
      margin-left: 0.5rem;
    }
    button {
      margin-top: 0.5rem;
    }
  }

  @media screen and (max-width: 375px) {
    flex-direction: column;
    input {
      width: 90%;
      margin: 0 auto 1rem;
      height: 3rem;
      font-size: 1.6rem;
    }
    button {
      width: 90%;
      margin: 0 auto;
      height: 3rem;
      font-size: 1.6rem;
    }
  }
`;

const Options = styled.option`
  background-color: black;
`;
