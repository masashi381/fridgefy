import HomeImg from "./HomeImg";
import HomeIntro from "./HomeIntro";
import styled from "styled-components";

export default function HomeContent() {
	return (
		<StyledDiv>
			{/* <HomeImg /> */}
			<HomeIntro />
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	height: 80vh;
	background: center/cover no-repeat url("../assets/images/homeImage.jpg");
	position: relative;
`;
