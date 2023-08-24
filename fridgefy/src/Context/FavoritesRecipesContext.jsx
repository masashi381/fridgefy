import { createContext, useState, useReducer } from "react";

export const FavoritesRecipes = createContext();

const reducer = (state, action) => {
	console.log("action", action.payload);
	switch (action.type) {
		case "add":
			if(!state.includes(action.payload)){
				localStorage.setItem(action.payload.id, JSON.stringify(action.payload))
				return [...state, action.payload];
			}else{
				alert("Recipe already exists in the list.")
			}
		case "delete":
			localStorage.removeItem(action.id)
			return state.filter((t) => t.id !== action.id);
	}
};

export function FavoritesRecipesContext({ children }) {
	const [favoriteRecipes, setFavoriteRecipes] = useState([]);

	let initState=[];
	Object.keys(localStorage).map(val=>{
		if(!JSON.parse(localStorage.getItem(val)).name){
			initState.push(JSON.parse(localStorage.getItem(val)))
		}
	});

	const [state, dispatch] = useReducer(reducer, initState);
	console.log("state: " + state);

	return (
		<FavoritesRecipes.Provider value={{ favoriteRecipes, setFavoriteRecipes, state, dispatch }}>
			{children}
		</FavoritesRecipes.Provider>
	);
}
