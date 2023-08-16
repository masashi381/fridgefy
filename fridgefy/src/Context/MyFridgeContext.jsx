import {createContext, useState} from 'react';

export const MyFridgeContext = createContext(null);

export function MyFridge({children}){
    const[fridge, setFridge] = useState({})

    
  const addIngredientToFridge = (ingredient) => {
    setFridge((prevFridge) => ({
      ...prevFridge,
      [ingredient]: true, // Mark the ingredient as present in the fridge
    }));
  };

    return(
        <MyFridgeContext.Provider value={{ fridge, addIngredientToFridge }}>
        {children}
      </MyFridgeContext.Provider>
    )
 }