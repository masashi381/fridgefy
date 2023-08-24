import { ReactSearchAutocomplete } from "react-search-autocomplete";

function RecipesAutoSearch({ list, setSearchedItem }) {
	const handleOnSearch = (string, results) => {
		// onSearch will have as the first callback parameter
		// the string searched and for the second the results.
		// console.log("string", string)
		// console.log("results", results)
		console.log("options", list);
	};

	const handleOnHover = (result) => {
		// the item hovered
		// console.log(result)
	};

	const handleOnSelect = (item) => {
		setSearchedItem(item);
	};

	const handleOnFocus = () => {
		// console.log('Focused')
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
		<ReactSearchAutocomplete
			items={list}
			onSearch={handleOnSearch}
			onHover={handleOnHover}
			onSelect={handleOnSelect}
			onFocus={handleOnFocus}
			autoFocus
			formatResult={formatResult}
			onClear={handleOnClear}
			styling={style}
		/>
	);
}

export default RecipesAutoSearch;

const style = {
	backgroundColor: "black",
	color: "white",
};
