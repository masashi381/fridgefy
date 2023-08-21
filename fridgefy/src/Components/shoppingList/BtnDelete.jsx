import { useContext } from "react";
import styled from "styled-components";
import { FavoritesRecipes } from "../../Context/FavoritesRecipesContext";

function BtnDelete({ recipe, setDeleteActive }) {
	const { dispatch } = useContext(FavoritesRecipes);

	function deleteHandler(id) {
		// localStorage.removeItem("data");
		setDeleteActive(false);
		dispatch({ type: "delete", id: id });
	}
	return (
		<>
			<DeleteSpan onClick={() => deleteHandler(recipe.id)}>
				<i className="fa-solid fa-trash"></i>
			</DeleteSpan>
		</>
	);
}

export default BtnDelete;

const DeleteSpan = styled.span`
	margin-right: 10px;
`;
