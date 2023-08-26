import React from "react";
import MyFridgeInput from "./MyFridgeInput";
import MyFridgeList from "./MyFridgeList";
import styled from "styled-components";

function MyFridgeComponent() {
	return (
		<MyFridgeDiv>
			<h2>MyFridge</h2>
			<MyFridgeInput />
			<MyFridgeList />
		</MyFridgeDiv>
	);
}

export default MyFridgeComponent;

const MyFridgeDiv = styled.div`
	width: 25vw;
	padding-top: 0.5rem;
	h2 {
		text-align: center;
		font-family: "DM Mono", monospace;
		font-weight: 400;
		font-size: 1.6rem;
		color: #6a4c93;
	}

	@media screen and (max-width: 375px) {
		width: 100vw;
	}
`;
