import { useContext } from "react";
import styled from "styled-components";
import { MyFridgeContext } from "../../Context/MyFridgeContext";

export default function ItemsBuy({ ingredient }) {
	const { addIngredientToFridge } = useContext(MyFridgeContext);

	return (
		<Li>
			<p>{ingredient}</p>
			<button
				className="addBtn"
				onClick={() => {
					addIngredientToFridge(ingredient, false);
				}}
			>
				<i class="fa-solid fa-plus"></i>
			</button>
		</Li>
	);
}

// const Li = styled.li`
// 	list-style: none;
// 	border-bottom: 1px solid black;
// 	padding: 5px 0;
// `;

// const Div = styled.div`
// 	width: 80%;
// 	display: flex;
// 	flex-direction: row;
// 	align-items: center;
// 	justify-content: space-between;
// 	margin: 0 auto;
// 	li {
// 		list-style: none;
// 		border-bottom: 1px solid black;
// 		padding: 5px 0;
// 	}
// `;

const Li = styled.li`
	width: 80%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
	margin-top: 0.5rem;
	border-bottom: 1px solid black;
	p {
		margin: 0;
		margin-bottom: 0.5rem;
		text-align: center;
		font-family: "DM Mono", monospace;
		font-weight: 400;
		font-size: 1.4rem;
	}
	.addBtn {
		margin-bottom: 0.5rem;
		background-color: #ffca3a;
		cursor: pointer;
		margin-right: 1rem;
		border-radius: 3rem;
		border: none;
		border-bottom: 0.2rem solid rgba(51, 51, 51, 0.5);
		&:hover {
			opacity: 0.5;
		}
		&:active {
			transform: translateY(0.2rem);
			border-bottom: none;
		}
	}
`;
