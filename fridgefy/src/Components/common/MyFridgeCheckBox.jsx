import styled from "styled-components";

function MyFridgeCheckBox({ element, checked, handleChange }) {
	const handleCheck = (e) => {
		handleChange(e.target.value);
	};

	return <Input type="checkbox" value={element} onChange={handleCheck} checked={checked} />;
}

export default MyFridgeCheckBox;

const Input = styled.input`
	accent-color: #1982c4;
`;
