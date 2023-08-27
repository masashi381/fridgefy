import React, { useContext, useState } from "react";
import { MyFridgeContext } from "../../Context/MyFridgeContext";
import styled from "styled-components";
import MyFridgeItem from "./MyFridgeItem";
import { User } from "../../Context/UserContext";

function MyFridgeList() {
	const { fridge, setFridge } = useContext(MyFridgeContext);
	const { user } = useContext(User);

	const onDelete = (ingredient) => {
		const fridgeArr = JSON.parse(localStorage.getItem(user.email))["fridge"];
		const recipesArr = JSON.parse(localStorage.getItem(user.email))["recipes"];

		fridgeArr.forEach((val) => {
			if (val.name == ingredient) {
				fridgeArr.splice(fridgeArr.indexOf(val), 1);

				const obj = {
					fridge: fridgeArr,
					recipes: recipesArr,
				};

				localStorage.setItem(user.email, JSON.stringify(obj));
			}
		});

		const updatedList = fridge.filter((item) => item.name !== ingredient);
		setFridge(updatedList);
	};

	return Object.values(fridge).map((element, index) => {
		return (
			<ListItems key={index}>
				<MyFridgeItem
					ingredient={element.name}
					key={index}
					setFridge={setFridge}
					fridge={fridge}
					onDelete={onDelete}
					isChecked={element.checked}
				/>
			</ListItems>
		);
	});
}

const ListItems = styled.ul`
	list-style: none;
	width: 80%;
	padding: 0;
	margin: 0 auto;

	@media screen and (max-width: 375px) {
		width: 90%;
	}
`;
export default MyFridgeList;
