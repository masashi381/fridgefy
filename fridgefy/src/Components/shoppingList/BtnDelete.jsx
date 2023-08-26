import { useContext } from "react";
import styled from "styled-components";
import { FavoritesRecipes } from "../../Context/FavoritesRecipesContext";

function BtnDelete({ recipe, setDeleteActive }) {
	const { dispatch } = useContext(FavoritesRecipes);

	function deleteHandler(id) {
		setDeleteActive(false);
		dispatch({ type: "delete", id: id });
	}
	return (
		<>
			<DeleteSpan onClick={() => deleteHandler(recipe.id)}>
				<i className="fa-solid fa-trash fa-lg"></i>
			</DeleteSpan>
		</>
	);
}

export default BtnDelete;

const DeleteSpan = styled.span`
	margin-right: 10px;
	i {
		color: #ff595e;
		&:hover {
			cursor: pointer;
		}
	}
`;
