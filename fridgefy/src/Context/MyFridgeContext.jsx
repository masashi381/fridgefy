import {createContext, useState} from 'react';

export const MyFridgeContext = createContext(null);

export function MyFridge({children}){
    const[fridge, setFridge] = useState({})


    return(
        <MyFridgeContext.Provider value={{fridge, setFridge}}>
            {children}
        </MyFridgeContext.Provider>
    )
 }