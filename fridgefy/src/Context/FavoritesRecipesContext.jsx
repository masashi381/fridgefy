import { createContext, useState, useReducer } from "react";

export const FavoritesRecipes = createContext();

const reducer = (state, action) => {
	console.log("action", action.payload);
	switch (action.type) {
		case "add":
			return [...state, action.payload];
		case "delete":
			return state.filter((t) => t.id !== action.id);
	}
};

export function FavoritesRecipesContext({ children }) {
	const [favoriteRecipes, setFavoriteRecipes] = useState([]);

	const [state, dispatch] = useReducer(reducer, []);
	console.log("state: " + state);

	return (
		<FavoritesRecipes.Provider value={{ favoriteRecipes, setFavoriteRecipes, state, dispatch }}>
			{children}
		</FavoritesRecipes.Provider>
	);
}
