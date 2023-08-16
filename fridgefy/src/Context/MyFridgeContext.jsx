import {createContext, useState} from 'react';

export const MyFridgeContext = createContext(null);

export function MyFridge({children}){
    const[fridge, setFridge] = useState([])

    
  const addIngredientToFridge = (ingredient) => {
    setFridge((prev)=> {
      return [...prev, ingredient]
    });
  };

    return(
        <MyFridgeContext.Provider value={{ fridge, addIngredientToFridge }}>
        {children}
      </MyFridgeContext.Provider>
    )
 }