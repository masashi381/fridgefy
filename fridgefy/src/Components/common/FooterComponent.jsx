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
					<span>,</span>
					<a href="https://github.com/masashi381" target="blank">
						{" "}
						Masashi
					</a>
					<span>,</span>{" "}
					<a href="https://github.com/DaisukeSK" target="blank">
						Daisuke{" "}
					</a>{" "}
					<span>&</span>{" "}
					<a href="https://github.com/GerardoAz" target="blank">
						Gerardo{" "}
					</a>
				</h4>
			</div>
			<p className="copy">&copy;2023 Fridgefy Project</p>
		</FooterDiv>
	);
}

export default FooterComponent;

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
		color: #fff;
		font-family: "DM Mono", monospace;
		font-weight: 400;
		font-size: 1.4rem;
		margin: 0;
	}

	h4 {
		margin-left: 1rem;
		a {
			text-decoration: none;
			color: #fff;
			cursor: pointer;
		}
	}
	.copy {
		font-size: 1.2rem;
		text-align: center;
		margin: 1rem auto;
	}

	@media screen and (max-width: 375px) {
		height: 30vh;
		div {
			flex-direction: column;
			height: auto;
			padding-top: 2rem;
			h4 {
				display: flex;
				flex-direction: column;
				span {
					display: none;
				}
				a {
					padding: 0.5rem 0;
				}
			}
		}
	}
`;
