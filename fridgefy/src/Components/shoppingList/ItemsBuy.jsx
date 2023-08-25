import { useContext } from "react";
import styled from "styled-components";
import { MyFridgeContext } from "../../Context/MyFridgeContext";

export default function ItemsBuy({ingredient}) {

	const { addIngredientToFridge } = useContext(MyFridgeContext);
	
	return (
		<Div>
			<Li>
				{ingredient}
			</Li>
			<button onClick={(()=>{
				addIngredientToFridge(ingredient, false)
			})}>+</button>
		</Div>
	);
}

const Li = styled.li`
	list-style: none;
	border-bottom: 1px solid black;
	padding: 5px 0;
`;

const Div = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

`
