import { createContext, useState } from "react";

export const FavoriteRecipesContext = createContext(null);

export function FavoriteRecipes({children}){
    const [recipes, setRecipes] = useState({})

    return(
        <FavoriteRecipesContext.Provider value={{recipes, setRecipes}}>
            {children}
        </FavoriteRecipesContext.Provider>
    )
}