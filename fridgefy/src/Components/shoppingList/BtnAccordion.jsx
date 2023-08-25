import styled from "styled-components";

function BtnAccordion({ isActive, setActive }) {
	function accordionHandler() {
		setActive(!isActive);
	}
	return (
		<div onClick={accordionHandler}>
			<Span>
				{isActive ? <i className="fa-solid fa-chevron-up "></i> : <i className="fa-solid fa-chevron-down "></i>}
			</Span>
		</div>
	);
}

export default BtnAccordion;

const Span = styled.span`
	padding-right: 1rem;
	&:hover {
		cursor: pointer;
	}
`;
