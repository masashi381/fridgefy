import HomeImg from "./HomeImg";
import HomeIntro from "./HomeIntro";
import styled from "styled-components";

export default function HomeContent() {
  return (
    <FlexDiv>
      <HomeImg />
      <HomeIntro/>
    </FlexDiv>
  )
};

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`
