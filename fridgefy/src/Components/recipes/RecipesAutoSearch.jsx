import { ReactSearchAutocomplete } from "react-search-autocomplete";
import styled from "styled-components";

function RecipesAutoSearch({ list, setSearchedItem }) {
	const handleOnSelect = (item) => {
		setSearchedItem(item);
	};

	

	const formatResult = (item) => {
		return (
			<>
				<span style={{ display: "block", textAlign: "left", zIndex:6 }}>{item.name}</span>
			</>
		);
	};

	return (
		<StyledDiv>
			<ReactSearchAutocomplete
				items={list}
				onSelect={handleOnSelect}
				autoFocus
				formatResult={formatResult}
				styling={style}
			/>
		</StyledDiv>
	);
}

export default RecipesAutoSearch;

const StyledDiv = styled.div`
	z-index: 1;
	position: relative;
	/* margin-bottom: 10rem; */
	.wrapper {
		box-sizing: border-box;
		position: absolute;
		z-index: 99;
	}

	@media screen and (max-width: 375px) {
		width: 90%;
		margin: 0 auto;
	}
`;
const style = {
	height: "36px",
	borderRadius: "0.5rem",
	fontFamily: "DM Mono, monospace",
	fontSize: "12px",
	boxShadow: "none",
};
