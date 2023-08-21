import BtnDelete from "./BtnDelete";
import BtnAccordion from "./BtnAccordion";
import styled from "styled-components";

function FavoriteBtnContainer({ recipe, isActive, setActive, setDeleteActive }) {
	return (
		<FlexDiv>
			<BtnDelete setDeleteActive={setDeleteActive} recipe={recipe} />
			<BtnAccordion isActive={isActive} setActive={setActive} />
		</FlexDiv>
	);
}

export default FavoriteBtnContainer;

const FlexDiv = styled.div`
	display: flex;
`;
