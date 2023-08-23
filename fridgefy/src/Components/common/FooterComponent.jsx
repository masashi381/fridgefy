import React from "react";
import styled from "styled-components";

function FooterComponent() {
	return (
		<FooterDiv>
			<div>
				<p>Created by: </p>
				<h4>
					<a href="https://github.com/diogoka" target="blank">
						Diogo
					</a>
					,
					<a href="https://github.com/masashi381" target="blank">
						{" "}
						Masashi
					</a>
					,{" "}
					<a href="https://github.com/DaisukeSK" target="blank">
						Daisuke{" "}
					</a>{" "}
					&{" "}
					<a href="https://github.com/GerardoAz" target="blank">
						Gerardo{" "}
					</a>
				</h4>
			</div>
			<p className="copy">&copy;2023 Fridgefy Project</p>
		</FooterDiv>
	);
}

const FooterDiv = styled.div`
	background-color: #1982c4;
	width: 100%;
	height: 10vh;
	div {
		height: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 1rem;
	}

	p,
	h4 {
		color: black;
		font-family: "DM Mono", monospace;
		font-weight: 400;
		font-size: 1.4rem;
		margin: 0;
	}

	h4 {
		margin-left: 1rem;
		a {
			text-decoration: none;
			color: black;
		}
	}
	.copy {
		font-size: 1.2rem;
		text-align: center;
		margin: 1rem auto;
	}
`;

export default FooterComponent;
