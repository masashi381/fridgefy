import { createContext, useState } from "react";

export const MyFridgeContext = createContext();

export function MyFridge({ children }) {

	let initState=[];
	Object.keys(localStorage).map(val=>{
		if(JSON.parse(localStorage.getItem(val)).name){
			initState.push(JSON.parse(localStorage.getItem(val)))
		};
	});

	const [fridge, setFridge] = useState(initState);

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

			localStorage.setItem(ingredient,JSON.stringify({
				name: ingredient,
				checked: checked
			}))


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
