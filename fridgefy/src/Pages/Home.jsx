import React from "react";
import HomeContent from "../Components/home/HomeContent";
import Header from "../Components/common/Header";
import FooterComponent from "../Components/common/FooterComponent";
import styled from "styled-components";

export default function Home() {
	return (
		<HomeDiv>
			<Header />
			<HomeContent />
			<FooterComponent />
		</HomeDiv>
	);
}

const HomeDiv = styled.div`
	height: 100vh;
`;
