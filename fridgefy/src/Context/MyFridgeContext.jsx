import { createContext, useContext, useEffect, useState } from "react";
import { User } from "./UserContext";

export const MyFridgeContext = createContext();

export function MyFridge({ children }) {

	const { user } = useContext(User);

	const getItems = () => {
		let initState=[];
		if(user){

			if(JSON.parse(localStorage.getItem(user.email))){
				
				JSON.parse(localStorage.getItem(user.email))["fridge"].forEach(val=>{
					initState.push({name: val.name, checked: val.checked});
				})
			}
		}
		return initState;
	}
	
	useEffect(() => {
		setFridge(getItems());
	}, [user])

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
			
			let fridgeArr;
			let recipesArr;

			if(localStorage.getItem(structuredClone(user.email))){
				fridgeArr=JSON.parse(localStorage.getItem(structuredClone(user.email)))["fridge"]
				recipesArr=JSON.parse(localStorage.getItem(structuredClone(user.email)))["recipes"]
			}
			
			const obj = !localStorage.getItem(user.email)?
				{
					fridge: [{name: ingredient, checked: checked}],
					recipes: []
				}
				:
				{
					fridge: [...fridgeArr, {name: ingredient, checked: checked}],
					recipes: recipesArr
				}
			
			localStorage.setItem(user.email, JSON.stringify(obj))
			
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
