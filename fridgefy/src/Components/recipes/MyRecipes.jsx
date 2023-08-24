import Styled from "styled-components";
import { useState, useContext } from "react";
import { FavoritesRecipes, FavoritesRecipesContext } from "../../Context/FavoritesRecipesContext";

export default function MyRecipesSec() {
	const { state, dispatch } = useContext(FavoritesRecipes);

	const deleteRecipe = (id) => {
		dispatch({ type: "delete", id: id });
	};

	return (
		<MyRecipeSection>
			<h2>My Recipes</h2>
			<ul>
				{state.map((item, index) => (
					<li>
						<p key={index}>{item.title}</p>
						<i className="fa-solid fa-trash fa-lg" onClick={() => deleteRecipe(item.id)}></i>
					</li>
				))}
			</ul>
		</MyRecipeSection>
	);
}

const MyRecipeSection = Styled.section`
    /* background-color: #1982c4; */
    width: 25vw;
    padding: 0;
    border-left: 1px solid rgba(100, 100, 100, 0.3);
    h2 {
        text-align: center;
		font-family: "DM Mono", monospace;
		font-weight: 400;
		font-size: 1.6rem;
    }
    ul{
        padding: 0;

        li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            margin: 0 auto;
            list-style: none;
            border-bottom: 1px solid black;   
            p {
                padding-left: .5rem;
                margin: 0;
                margin-bottom: 0.5rem;
                font-family: "DM Mono", monospace;
		        font-weight: 400;
		        font-size: 1.4rem;
            };
            i {
                color: rgba(255, 89, 94, 1);
            };
        };
    }
`;

// const MyRecipeUl = Styled.ul`
//     padding: 0;

// `;

// const MyRecipeLi = Styled.li`
//     list-style: none;
//     display: flex;
//     align-items: center;
//     border-bottom: 1px solid black;
//     width: fit-content;
//     padding: 5px 0;

//     div {
//         width: 90%;
//         margin-right: 20px;
//     };

// `;
