import { ReactSearchAutocomplete } from "react-search-autocomplete";
import styled from "styled-components";

function RecipesAutoSearch({ list, setSearchedItem }) {

	const handleOnSelect = (item) => {
		setSearchedItem(item);
	};

	const handleOnClear = () => {
		setSearchedItem([]);
	};

	const formatResult = (item) => {
		return (
			<>
				<span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
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
				onClear={handleOnClear}
				styling={style}
			/>
		</StyledDiv>
	);
}

export default RecipesAutoSearch;

const StyledDiv = styled.div`
	.wrapper {
		box-sizing: border-box;
	}
`;
const style = {
	height: "36px",
	borderRadius: "0.5rem",
	fontFamily: "DM Mono, monospace",
	fontSize: "12px",
	boxShadow: "none",
};
