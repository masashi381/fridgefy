import { createContext, useState } from "react";

export const MyFridgeContext = createContext();

export function MyFridge({ children }) {
	const [fridge, setFridge] = useState([]);

	const handlecheck = (ing) => {
		let newState = [];
		Object.keys(fridge).map((key)=>{
			let newObject = {}
			let name = fridge[key].name
			let isChecked = fridge[key].checked

			if(name === ing){
				newObject = {
					name: name,
					checked: isChecked ? false : true
				}
			} else {
				newObject = {
					name: name,
					checked: isChecked
				}
			}

			newState = [...newState, newObject]
		})

		setFridge(newState)
	}


	const addIngredientToFridge = (ingredient, checked) => {
		setFridge((prev) => {
			return [...prev, {
				name: ingredient,
				checked: checked
			}];
		});
	};

	return <MyFridgeContext.Provider value={{ fridge, addIngredientToFridge, setFridge, handlecheck }}>
		{children}
		</MyFridgeContext.Provider>;
}
