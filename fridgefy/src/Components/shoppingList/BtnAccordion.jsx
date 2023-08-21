import styled from "styled-components";

function BtnAccordion({ isActive, setActive }) {
	function accordionHandler() {
		setActive(!isActive);
	}
	return (
		<div onClick={accordionHandler}>
			<span>
				{isActive ? (
					<StyledI className="fa-solid fa-chevron-up"></StyledI>
				) : (
					<StyledI className="fa-solid fa-chevron-down"></StyledI>
				)}
			</span>
		</div>
	);
}

export default BtnAccordion;

const StyledI = styled.i`
	padding-right: 10px;
`;
