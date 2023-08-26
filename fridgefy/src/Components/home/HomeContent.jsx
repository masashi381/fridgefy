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
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
	background: center/cover no-repeat url("../assets/images/homeImage.jpg");
`;
