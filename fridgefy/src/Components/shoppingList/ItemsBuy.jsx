import styled from "styled-components";

export default function ItemsBuy(props) {
	return props.contents.map((item, index) => <Li key={index}>{item}</Li>);
}

const Li = styled.li`
	list-style: none;
	border-bottom: 1px solid black;
	padding: 5px 0;
`;
