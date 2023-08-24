import styled from "styled-components";
import MyFridgeCheckBox from "./MyFridgeCheckBox";
import { useState, useContext } from "react";
import { MyFridgeContext } from "../../Context/MyFridgeContext";

function MyFridgeItem({ ingredient, onDelete, isChecked }) {
	const [checked, setChecked] = useState(false);
	const { handlecheck } = useContext(MyFridgeContext);

	return (
		<ListElement>
			<MyFridgeCheckBox
				element={ingredient}
				setChecked={setChecked}
				checked={isChecked}
				handleChange={handlecheck}
			/>
			<p>{ingredient}</p>
			<DeleteButton
				onClick={() => {
					onDelete(ingredient);
				}}
			>
				<img src="../../assets/images/deleteItemIcon.png" width={"15px"} height={"15px"} />
			</DeleteButton>
		</ListElement>
	);
}

export default MyFridgeItem;

const DeleteButton = styled.button`
	background: none;
	border: none;
	padding: 0;
	justify-content: space-between;
	flex-wrap: nowrap;
`;

const ListElement = styled.li`
	display: flex;
	justify-content: space-between;
	text-decoration: none;
	padding-left: 0;
`;
