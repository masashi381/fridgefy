import React, { useContext } from "react";
import { User } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header(props) {
	const { googleSignIn, googleLogOut, user } = useContext(User);
	const navigate = useNavigate();

	const handleGoogleSignIn = async () => {
		try {
			await googleSignIn();
		} catch (e) {
			console.log(e);
		}
	};

	const handleGoogleLogOut = async () => {
		try {
			await googleLogOut();
		} catch (e) {
			console.log(e);
		}
	};

	const handleclick = (local) => {
		navigate(`/${local}`);
	};

	if (!user) {
		return (
			<StyledDiv>
				<h1>Fridgefy</h1>
				<button onClick={handleGoogleSignIn}>LOGIN</button>
			</StyledDiv>
		);
	}

	return (
		<StyledDiv>
			<h1>FridgeFy</h1>
			<StyledLinksContainer>
				<button
					onClick={() => {
						navigate("/home");
					}}
				>
					Home
				</button>

				<button
					onClick={() => {
						navigate("/recipes");
					}}
				>
					Recipes
				</button>

				<button
					onClick={() => {
						navigate("/shoppinglist");
					}}
				>
					Shopping List
				</button>
			</StyledLinksContainer>
			<StyledLoginContainer>
				<p>Hi, {user.displayName}</p>
				<button onClick={handleGoogleLogOut}>LOGOUT</button>
			</StyledLoginContainer>
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
	}
	button {
		font-family: "DM Mono", monospace;
		font-weight: 400;
		background: #ffca3a;
		cursor: pointer;
	}
`;

const StyledLinksContainer = styled.div`
	display: flex;
	justify-content: space-between;
	button {
		font-family: "DM Mono", monospace;
		font-weight: 400;
		cursor: pointer;
		margin-right: 1rem;
		border-radius: 3rem;
		border: none;
		border-bottom: 0.2rem solid rgba(51, 51, 51, 0.5);
		&:hover {
			opacity: 0.5;
		}
		&:active {
			transform: translateY(0.2rem);
			border-bottom: none;
		}
		&:last-child {
			margin: 0;
		}
	}
`;

const StyledLoginContainer = styled.div`
	p {
		font-size: 1.6rem;
		font-family: "DM Mono", monospace;
		font-weight: 400;
		padding-left: 0.5rem;
		margin: 0;
		margin-bottom: 0.5rem;
	}
	button {
		width: 10rem;
		font-family: "DM Mono", monospace;
		font-weight: 400;
		background: #ffca3a;
		border-radius: 3rem;
		cursor: pointer;
		border: none;
		border-bottom: 0.2rem solid rgba(51, 51, 51, 0.3);
		&:hover {
			opacity: 0.5;
		}
		&:active {
			transform: translateY(0.2rem);
			border-bottom: none;
		}
	}
`;
