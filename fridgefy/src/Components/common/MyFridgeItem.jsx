import styled from "styled-components";
import MyFridgeCheckBox from "./MyFridgeCheckBox";
import { useState, useContext } from "react";
import { MyFridgeContext } from "../../Context/MyFridgeContext";

function MyFridgeItem({ ingredient, onDelete, isChecked }) {
	const [checked, setChecked] = useState(false);
	const { handlecheck } = useContext(MyFridgeContext);

	return (
		<ListElement>
			<div className="checkboxContainer">
				<MyFridgeCheckBox
					element={ingredient}
					setChecked={setChecked}
					checked={isChecked}
					handleChange={handlecheck}
				/>
				<p>{ingredient}</p>
			</div>
			<button
				onClick={() => {
					onDelete(ingredient);
				}}
			>
				<i class="fa-solid fa-trash"></i>
			</button>
		</ListElement>
	);
}

export default MyFridgeItem;

// const DeleteButton = styled.button`
// 	background: none;
// 	border: none;
// 	padding: 0;
// 	justify-content: space-between;
// 	flex-wrap: nowrap;
// `;

const ListElement = styled.li`
	width: 100%;
	display: flex;
	justify-content: space-between;
	text-decoration: none;
	padding-left: 0;
	border-bottom: 1px solid black;
	.checkboxContainer {
		display: flex;
		margin-top: 0.5rem;
		p {
			padding-left: 1rem;
			margin: 0;
			font-family: "DM Mono", monospace;
			font-weight: 400;
			font-size: 1.4rem;
		}
	}
	button {
		padding: 0;
		border: none;
		background: none;
		i {
			color: rgba(255, 89, 94, 1);
		}
	}
`;
