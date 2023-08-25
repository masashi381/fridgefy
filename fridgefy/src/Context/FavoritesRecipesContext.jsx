import { createContext,useContext, useState, useReducer, useEffect } from "react";
import { User } from "./UserContext";

export const FavoritesRecipes = createContext();

export function FavoritesRecipesContext({ children }) {

	const { user } = useContext(User);
	const [favoriteRecipes, setFavoriteRecipes] = useState([]);

	const reducer = (state, action) => {
		// console.log("action", action.payload);
		switch (action.type) {
			case "add":
				let newObj=structuredClone(action.payload)
				newObj["user"]=user.email
				localStorage.setItem(action.payload.id, JSON.stringify(newObj));
				return [...state, action.payload];
				
			case "delete":
				localStorage.removeItem(action.id)
				return state.filter((t) => t.id !== action.id);

			case "deleteAll":
				return [];
		}
	};

	// let initState=[];
	// Object.keys(localStorage).forEach(val=>{
	// 	if(
	// 		!JSON.parse(localStorage.getItem(val)).name
	// 		// &&
	// 		// JSON.parse(localStorage.getItem(val)).user==user.email
	// 		){
	// 		initState.push(JSON.parse(localStorage.getItem(val)))
	// 	}
	// });

	const getItems = () => {
		
		if(user){

			Object.keys(localStorage).forEach(val=>{
		
				// console.log("val",JSON.parse(localStorage.getItem(val)).user)
				// console.log("boolean",JSON.parse(localStorage.getItem(val)).name
				// &&JSON.parse(localStorage.getItem(val)).user==user.email)
				// console.log("email", user.email);
				if(
					!JSON.parse(localStorage.getItem(val)).name
					&&
					JSON.parse(localStorage.getItem(val)).user==user.email
				){
					// console.log("here");
					// initState.push(JSON.parse(localStorage.getItem(val)));
					dispatch({ type: "add", payload: JSON.parse(localStorage.getItem(val)) });
				};
		
			});
		}
		//console.log("RSLT", initState);
		
	}

	
	useEffect(()=>{
		console.log("-----------")
		getItems()
		Object.keys(localStorage).forEach(val=>{
			console.log("LS",JSON.parse(localStorage.getItem(val)).title)

		})
		if(user){

			console.log("EMAIL",user.email)
		}
		
	}, [user])
	
	const [state, dispatch] = useReducer(reducer, []);
	console.log("STATE:",state)
	// console.log("state: " + state);

	// Object.keys(localStorage).forEach(val=>{
	// 	console.log(JSON.parse(localStorage.getItem(val)))
	// })

	return (
		<FavoritesRecipes.Provider value={{ favoriteRecipes, setFavoriteRecipes, state, dispatch }}>
			{children}
		</FavoritesRecipes.Provider>
	);
}
