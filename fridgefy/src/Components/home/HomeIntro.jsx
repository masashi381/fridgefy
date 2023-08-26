import React, { useContext } from "react";
import styled from "styled-components";
import { User } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

export default function HomeIntro() {
	const navigate = useNavigate();
	const handleclick = () => {
		navigate("/recipes");
	};

	const { user } = useContext(User);
	return (
		<Div>
			<p>
				Welcome to Fridgefy - your ultimate destination for culinary inspiration! Whether you're a seasoned chef
				or a novice in the kitchen, we're here to make your cooking journey delightful and flavorful. Our
				extensive collection of recipes caters to all tastes and dietary preferences, ensuring that you'll find
				something to excite your taste buds. From quick and easy weeknight dinners to show-stopping desserts,
				we've got you covered. Join us in exploring the art of cooking as we embark on a flavorful adventure
				together!
			</p>

			{user != null ? <button onClick={handleclick}>Recipes</button> : <h2>Please log in to start!</h2>}
		</Div>
	);
}

const Div = styled.div`
	width: 40vw;
	height: 50vh;
	padding-top: 1rem;
	background-color: rgba(255, 255, 255, 0.85);
	border-radius: 3rem;
	p {
		width: 80%;
		margin: 0 auto;
		font-size: 1.6rem;
		font-family: "DM Mono", monospace;
		font-weight: 400;
		color: #1982c4;
	}
	button {
		display: block;
		width: 15rem;
		height: 5rem;
		margin: 1rem auto 0;
		background-color: #ffca3a;
		box-shadow: 2px 2px black;
		border-radius: 2.5rem;
		cursor: pointer;
		font-family: "DM Mono", monospace;
		font-weight: 400;
		font-size: 1.6rem;
		&:hover {
			opacity: 0.5;
		}
	}
	h2 {
		width: 80%;
		margin: 10px auto;
		text-align: center;
		font-family: "DM Mono", monospace;
		font-weight: 400;
		font-size: 2.4rem;
		color: #6a4c93;
	}
`;
