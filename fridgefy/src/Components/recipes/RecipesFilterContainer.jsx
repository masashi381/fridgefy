import { useState, useReducer, useEffect, useContext } from "react";
import RecipesFilter from "./RecipesFilter";
import axios from "axios";
import { MyFridgeContext } from "../../Context/MyFridgeContext";
import styled from "styled-components";
import { diets, intolerances, cuisines } from "../../Constants/Options"

function RecipesFilterContainer({ list, setList, setRandomList, setOptions }) {
	const [innerState, setInnerState] = useState([]);
	const { fridge } = useContext(MyFridgeContext);

	useEffect(() => {
		setList(innerState);
		setOptions(innerState);
	}, [innerState]);

	const optionFilters = [
		{
			cuisine: [],
		},
		{
			diet: [],
		},
		{
			intolerances: [],
		},
	];

	const filtersReducer = (state, action) => {
		switch (action.type) {
			case "cuisine":
				return state.map((filter) => {
					if (Object.keys(filter)[0] === action.type) {
						return { ...filter, cuisine: action.payload.cuisine };
					} else {
						return filter;
					}
				});
			default:
				return state;
			case "diet":
				return state.map((filter) => {
					if (Object.keys(filter)[0] === action.type) {
						return { ...filter, diet: action.payload.diet };
					} else {
						return filter;
					}
				});
			case "intolerances":
				return state.map((filter) => {
					if (Object.keys(filter)[0] === action.type) {
						return { ...filter, intolerances: action.payload.intolerances };
					} else {
						return filter;
					}
				});
		}
	};

	const [filters, dispatch] = useReducer(filtersReducer, optionFilters);

	const optionsGenerating = (rawOptions) => {
		const formatedOptions = []
		rawOptions.forEach((el) => {
		formatedOptions.push({
			value: el,
			label: el,
		});
	}
	)
	return formatedOptions
}

	const optionsCuisine = optionsGenerating(cuisines);
	const optionsIntolerances = optionsGenerating(intolerances);
	const optionsDiets = optionsGenerating(diets);


	const mountStringFilter = (obj) => {
		let result = "";
		let query = Object.keys(obj).toString();
		Object.values(obj).forEach((el, key) => {
			Object.values(el).map((subEl, key) => {
				if (result === "") {
					result = query + "=" + subEl.value;
				} else {
					result = result + "&" + subEl.value;
				}
			});
		});

		if (result === query) {
			return "";
		} else {
			return result;
		}
	};

	const checkedFrigeItems = () => {
		let result = "";
		Object.keys(fridge).map((key) => {
			if (fridge[key].checked) {
				if (result === "") {
					result = "&" + result + "includeIngredients=" + fridge[key].name;
				} else {
					result = result + "," + fridge[key].name;
				}
			}
		});
		return result;
	};

	const submitRequest = () => {

		setInnerState([]);
		let queryIngredients = checkedFrigeItems();
		if (
			filters[0].cuisine.length === 0 &&
			filters[1].diet.length === 0 &&
			filters[2].intolerances.length === 0 &&
			queryIngredients === ""
		) {
			return setRandomList();
		}

		const key = import.meta.env.VITE_SERVER_API_KEY;
		let cuisines = mountStringFilter(filters[0]);
		let diets = mountStringFilter(filters[1]);
		let intolerances = mountStringFilter(filters[2]);

		let baseUrl = `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${key}&${
			cuisines ? cuisines + "&" : ""
		}${diets ? diets + "&" : ""}${intolerances ? intolerances + "&" : ""}`;
		baseUrl = baseUrl.substring(0, baseUrl.length - 1) + queryIngredients;

		let nOfRecipes = 15;

		axios.get(`${baseUrl}&number=${nOfRecipes}`).then((response) => {

				response.data.results.map((value, index)=>{
					let url = `https://api.spoonacular.com/recipes/${value.id}/information?apiKey=${key}`
					axios.get(url).then((res)=>{
						setInnerState((prev)=>{
							return [...prev, res.data]
						})

					})
				})
			
		});
	};

	return (
		<FilterContainer>
			<RecipesFilter name="cuisine" options={optionsCuisine} dispatch={dispatch} />
			<RecipesFilter name="intolerances" options={optionsIntolerances} dispatch={dispatch} />
			<RecipesFilter name="diet" options={optionsDiets} dispatch={dispatch} />
			<button onClick={submitRequest}>Filter</button>
		</FilterContainer>
	);
}

export default RecipesFilterContainer;

const FilterContainer = styled.div`
	width: 100%;
	button {
		margin: 0.5rem 0;
		background-color: #ffca3a;
		box-shadow: 2px 2px black;
		margin-left: 0.5rem;
		border-radius: 2.5rem;
		cursor: pointer;
		font-family: "DM Mono", monospace;
		font-weight: 400;
		font-size: 1.2rem;
		&:hover {
			opacity: 0.5;
		}
	}

	@media screen and (max-width: 375px) {
		width: 90vw;
		margin: 1rem auto;
		button {
			width: 90vw;
			height: 4rem;
			margin: 1rem auto;
			font-size: 1.8rem;
		}
	}
`;
