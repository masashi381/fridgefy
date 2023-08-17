import { createContext, useState } from "react";

export const FavoritesRecipes = createContext();

export function FavoritesRecipesContext({children}) {

    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    return (
        <FavoritesRecipes.Provider value={{favoriteRecipes, setFavoriteRecipes}}>
            {children}
        </FavoritesRecipes.Provider>
    );
}


