import { createContext, useContext, useState, useReducer, useEffect } from "react";
import { User } from "./UserContext";

export const FavoritesRecipes = createContext();

export function FavoritesRecipesContext({ children }) {

	const { user } = useContext(User);
	const [favoriteRecipes, setFavoriteRecipes] = useState([]);

	const reducer = (state, action) => {
		let fridgeArr;
		let recipesArr;

		if (localStorage.getItem(structuredClone(user.email))) {
			fridgeArr = JSON.parse(localStorage.getItem(structuredClone(user.email)))["fridge"]
			recipesArr = JSON.parse(localStorage.getItem(structuredClone(user.email)))["recipes"]
		}

		switch (action.type) {

			case "add":

				const obj = !localStorage.getItem(structuredClone(user.email)) ?
					{
						fridge: [],
						recipes: [action.payload]
					}
					:
					{
						fridge: fridgeArr,
						recipes: [...recipesArr, action.payload]

					}

				localStorage.setItem(structuredClone(user.email), JSON.stringify(obj))

				return [...state, action.payload];

			case "delete":

				recipesArr.forEach(val => {

					if (val.id == action.id) {

						recipesArr.splice(recipesArr.indexOf(val), 1)

						const obj = {
							fridge: fridgeArr,
							recipes: recipesArr
						}

						localStorage.setItem(structuredClone(user.email), JSON.stringify(obj))
					}
				})

				return state.filter((t) => t.id !== action.id);

			case "deleteAll":
				return [];

			case "init":
				return [...state, action.payload];
		}
	};


	const getItems = () => {

		if (user) {

			if (JSON.parse(localStorage.getItem(structuredClone(user.email)))) {

				JSON.parse(localStorage.getItem(structuredClone(user.email)))["recipes"].forEach(val => {

					dispatch({ type: "init", payload: val });

				})
			}
		}
	}

	useEffect(() => {
		getItems()
	}, [user])

	const [state, dispatch] = useReducer(reducer, []);

	return (
		<FavoritesRecipes.Provider value={{ favoriteRecipes, setFavoriteRecipes, state, dispatch }}>
			{children}
		</FavoritesRecipes.Provider>
	);
}
