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

const MyFridgeDiv = styled.div`
	width: 25vw;
	padding-top: 0.5rem;
	border-right: 1px solid rgba(100, 100, 100, 0.3);
	/* background-color: #1982c4; */
	h2 {
		text-align: center;
		font-family: "DM Mono", monospace;
		font-weight: 400;
		font-size: 1.6rem;
	}
`;

export default MyFridgeComponent;
