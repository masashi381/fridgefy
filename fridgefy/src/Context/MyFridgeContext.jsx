import { createContext, useState } from "react";

export const MyFridgeContext = createContext();

export function MyFridge({ children }) {

	let initState=[];
	Object.keys(localStorage).map(val=>{
		if(val==localStorage.getItem(val)){
			initState.push(localStorage.getItem(val))
		};
	});

	const [fridge, setFridge] = useState(initState);

	const addIngredientToFridge = (ingredient) => {
		setFridge((prev) => {
			localStorage.setItem(ingredient,ingredient)
			return [...prev, ingredient];
		});
	};

	return <MyFridgeContext.Provider value={{ fridge, addIngredientToFridge, setFridge }}>{children}</MyFridgeContext.Provider>;
}
