import React, { useContext } from "react";
import { User } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FavoritesRecipes } from "../../Context/FavoritesRecipesContext";
import { MyFridgeContext } from "../../Context/MyFridgeContext";

function Header({location}) {
	const { googleSignIn, googleLogOut, user } = useContext(User);
	const { dispatch } = useContext(FavoritesRecipes);
	const { setFridge } = useContext(MyFridgeContext);

	const navigate = useNavigate();

	const handleGoogleSignIn = async () => {
		try {
			await googleSignIn();
		} catch (e) {
			console.log(e);
		}
	};

	const handleGoogleLogOut = async () => {
		dispatch({ type: "deleteAll", payload: null });
		setFridge([]);
		try {
			await googleLogOut();
		} catch (e) {
			console.log(e);
		}
	};

	if (!user) {
		return (
			<StyledDiv>
				<h1><strong>F</strong>ridgeFy</h1>
				<button className="logIn" onClick={handleGoogleSignIn}>
					LOGIN
				</button>
			</StyledDiv>
		);
	}

	return (
		<StyledDiv>
			<h1><strong>F</strong>ridgeFy</h1>
			<div className="linkedContainer">

				{location === "homePage" ? <button disabled >Home</button> : <button onClick={() => {navigate("/home");}}>Home</button>}

				{location === "recipesPage" ? <button disabled >Recipes</button> : <button onClick={() => {navigate("/recipes");}}>Recipes</button>}
				
				{location === "listPage" ? <button disabled >Shopping List</button> : <button onClick={() => {navigate("/shoppinglist");}}>Shopping List</button>}

			</div>
			<div className="logInContainer">
				<p>Hi, {user.displayName}</p>
				<button onClick={handleGoogleLogOut}>LOGOUT</button>
			</div>
		</StyledDiv>
	);
}

export default Header;

const StyledDiv = styled.div`
	display: flex;
	height: 10vh;
	justify-content: space-between;
	align-items: center;
	background: #1982c4;
	padding-left: 5rem;
	padding-right: 5rem;
	h1 {
		font-family: "DM Mono", monospace;
		font-weight: 400;
		font-size: 2.4rem;
		color: #fff;
	}
	.linkedContainer {
		display: flex;
		justify-content: space-between;
		button {
			margin-right: 1rem;
			padding: 0.5rem 0.8rem;
			background-color: #ffca3a;
			box-shadow: 2px 2px black;
			border-radius: 2.5rem;
			cursor: pointer;
			font-family: "DM Mono", monospace;
			font-weight: 400;
			font-size: 1.4rem;
			&:hover:enabled {
				opacity: 0.5;
			}
			&:last-child {
				margin: 0;
			}
		}
		button:disabled{
			cursor: default;
		}
	}
	.logIn {
		width: 10rem;
		padding: 0.5rem 0.6rem;
		background-color: #ffca3a;
		box-shadow: 2px 2px black;
		border-radius: 2.5rem;
		cursor: pointer;
		font-family: "DM Mono", monospace;
		font-weight: 400;
		font-size: 1.4rem;
		&:hover {
			opacity: 0.5;
		}
	}
	.logInContainer {
		p {
			padding-left: 0.5rem;
			margin: 0;
			margin-bottom: 0.5rem;
			font-size: 1.6rem;
			font-family: "DM Mono", monospace;
			font-weight: 400;
			color: #fff;
		}
		button {
			width: 10rem;
			padding: 0.5rem 0.6rem;
			background-color: #ffca3a;
			box-shadow: 2px 2px black;
			border-radius: 2.5rem;
			cursor: pointer;
			font-family: "DM Mono", monospace;
			font-weight: 400;
			font-size: 1.4rem;
			&:hover {
				opacity: 0.5;
			}
		}
	}

	strong{
		font-size: 4rem;
	}

	@media screen and (max-width: 834) {
	}
	@media screen and (max-width: 375px) {
		height: 20vh;
		flex-wrap: wrap;
		padding: 0;
		h1 {
			margin: 0;
			margin-left: 0.5rem;
			order: 1;
			font-size: 3rem;
		}
		.linkedContainer {
			order: 3;
			margin: 0 auto;
			button {
				font-size: 1.5rem;
				padding: 0.5rem 1rem;
			}
		}
		.logInContainer {
			order: 2;
			margin-right: 0.5rem;
		}
		.logIn {
			order: 2;
			margin-right: 0.5rem;
		}
	}
`;
