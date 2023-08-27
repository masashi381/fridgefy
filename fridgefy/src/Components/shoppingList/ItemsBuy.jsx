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
		color: #1982c4;
	}
	.addBtn {
		padding: 0.2rem 0.6rem;
		margin-bottom: 0.5rem;
		background-color: #ffca3a;
		box-shadow: 2px 2px black;
		border-radius: 2.5rem;
		cursor: pointer;
		font-family: "DM Mono", monospace;
		font-weight: 400;
		font-size: 1.2rem;
		&:hover {
			opacity: 0.5;
		}
	}

	@media screen and (max-width: 375px) {
		width: 90%;
		p {
			font-size: 1.6rem;
		}
	}
`;
