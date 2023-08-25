import { createContext, useContext, useEffect, useState } from "react";
import { User } from "./UserContext";

export const MyFridgeContext = createContext();

export function MyFridge({ children }) {

	const { user } = useContext(User);

	// console.log("email1:",JSON.parse(localStorage.getItem("vanilla")).user)
	// console.log("email2:",user.email)
	
	const getItems = () => {
		let initState=[];
		if(user){

			Object.keys(localStorage).forEach(val=>{
		
				// console.log("val",JSON.parse(localStorage.getItem(val)).user)
				// console.log("boolean",JSON.parse(localStorage.getItem(val)).name
				// &&JSON.parse(localStorage.getItem(val)).user==user.email)
				// console.log("email", user.email);
				if(
					JSON.parse(localStorage.getItem(val)).name
					&&
					JSON.parse(localStorage.getItem(val)).user==user.email
				){
					// console.log("here");
					initState.push(JSON.parse(localStorage.getItem(val)));
				};
		
			});
		}
		// console.log("result", initState);
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


			localStorage.setItem(ingredient, JSON.stringify({
				user: structuredClone(user.email),
				name: ingredient,
				checked: checked
			}))

			return [...prev, {
				name: ingredient,
				checked: checked
			}];

		});

		// Object.keys(localStorage).forEach(val=>{
		// 	console.log(JSON.parse(localStorage.getItem(val)))
		// })
	};


	return <MyFridgeContext.Provider value={{ fridge, addIngredientToFridge, setFridge, handlecheck }}>
		{children}
		</MyFridgeContext.Provider>;
}
