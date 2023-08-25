import React, { useContext, useState } from "react";
import { MyFridgeContext } from "../../Context/MyFridgeContext";
import styled from "styled-components";
import MyFridgeItem from "./MyFridgeItem";

function MyFridgeList() {
	const { fridge, setFridge } = useContext(MyFridgeContext);

	const onDelete = (ingredient) => {
		const updatedList = fridge.filter((item) => item.name !== ingredient);
		setFridge(updatedList);
	};

	return Object.values(fridge).map((element, index) => {
		return (
			<ListItems>
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
`;
export default MyFridgeList;
