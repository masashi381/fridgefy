import Styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FavoritesRecipes } from "../../Context/FavoritesRecipesContext";

export default function RecipesList({ list }) {
	const [currentPage, setCurrentPage] = useState(0);
	const { dispatch, state } = useContext(FavoritesRecipes);

	useEffect(() => {
		const addBtton = document.querySelectorAll(".addBtn");
		addBtton.forEach((val1) => {
			let disabled = false;
			state.forEach((val2) => {
				if (val1.id == val2.id && disabled == false) {
					disabled = true;
				}
			});

			val1.disabled = disabled ? true : false;
		});
	});

	const itemsPerPage = 15;
	const totalPages = Math.ceil(list.length / itemsPerPage);
	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const subset = list.slice(startIndex, endIndex);

	const switchDetail = (e) => {
		if (e.target.textContent == "More") {
			document.querySelectorAll(".detail").forEach((val) => {
				val.style.display = "none";
			});
		}
		const targrt = e.target.closest("li").querySelector(".detail");
		targrt.style.top = window.pageYOffset - 150 + "px";
		targrt.style.display = targrt.style.display == "block" ? "none" : "block";
	};

	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
	};

	const addFavoriteRecipes = (e) => {
		const favorite = filterRecipesList(e.target.id);
		dispatch({ type: "add", payload: favorite });
	};

	const filterRecipesList = (id) => {
		let result;
		const search = list.map((item) => {
			if (id === item.id.toString()) {
				return (result = item);
			}
		});
		return result;
	};

	return (
		<div>
			<Ul>
				{subset.map((item, index) => (
					<li key={index} className={index}>
						<img src={item["image"]} />
						<h2>{item["title"]}</h2>
						<div className="detail">
							<div className="deleteBtn" onClick={switchDetail}>
								<i className="fa-solid fa-square-xmark fa-2xl my-style"></i>
							</div>
							<h2 className="titleInMore">{item["title"]}</h2>
							<img className="imgInsideMore" src={item["image"]} />
							<div className="info">
								<h3>Ingredients:</h3>
								<p>
									{item["extendedIngredients"].map((val, index) => (
										<span key={index}>{val.name},&nbsp;</span>
									))}
								</p>
							</div>
						</div>
						<div className="btnContainer">
							<button className="moreBtn" onClick={switchDetail}>
								More
							</button>
							<button id={item["id"]} className="addBtn" onClick={addFavoriteRecipes}>
								Add
							</button>
						</div>
					</li>
				))}
			</Ul>
			<StyledReactPaginate
				pageCount={totalPages}
				onPageChange={handlePageChange}
				forcePage={currentPage}
				previousLabel={"<<"}
				nextLabel={">>"}
				breakLabel={"..."}
			/>
		</div>
	);
}

const Ul = Styled.ul`
	width: 50vw;
	list-style: none;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	padding: 0;
	margin: 0 auto;
	li{
		width: 35%;
		border: 1px solid grey;
		margin: 1rem 0;
		border-radius: 0.5rem;
		background: #1982c4;
		box-sizing: border-box;
		img{
			width:  22.4rem;
			height: 15rem;
			object-fit: cover;
		}
		h2 {			
			text-align: center;
			margin: 1rem;
			font-family: "DM Mono", monospace;
			font-weight: 400;
			font-size: 1.8rem;
			color: #fff;
		}
		.detail{
			display:none;
			position: absolute;
			z-index: 2;
			top:0;
			left: 50%;
			transform: translateX(-50%);
			background-color: rgba(255, 255, 255, 0.9);
			width: 70%;
			border: 1px solid grey;
			box-sizing: border-box;
			border-radius: 1rem;
			.deleteBtn{
				position: absolute;
        top: 0.3rem;
        right: 0.3rem;
        width: 1.5rem;
        height: 1.5rem;
				.my-style{
					width: 1rem;
					height: 1rem;
					color: #ff595e;
					&:hover{
						cursor: pointer;
						opacity: .5;
					}
				}
			}
			.titleInMore{
				color: #1982c4;
			}
			.imgInsideMore{
        display: block;
				width: 36rem;
				height: auto;
        margin: 0 auto;
				object-fit: cover;
			}
			.info{
				width: 80%;
    		margin: 0 auto;
				h3{
					margin: 1rem auto;
					font-family: "DM Mono", monospace;
					font-weight: 400;
					font-size: 1.6rem;
					color: #6a4c93;
				}
				p{
					width: 90%;
					display: flex;
					flex-wrap: wrap;
					margin: 1rem auto;
					font-family: "DM Mono", monospace;
					font-weight: 400;
					font-size: 1.4rem;
					color: #1982c4;
				}
			}
		}
		.btnContainer{
			display: flex;
			justify-content: space-evenly;
			padding: 1rem;
			button{
				padding: 0.2rem .6rem;
				background-color: #ffca3a;
				box-shadow: 2px 2px black;
				border-radius: 2.5rem;
				cursor: pointer;
				font-family: "DM Mono", monospace;
				font-weight: 400;
				font-size: 1.2rem;
				&:hover {
					opacity: 0.5;
				}
			}
		}
	}

	@media screen and (max-width: 375px){
		width: 90vw;
    justify-content: normal;
    flex-direction: column;
		li {
			width: 100%;
			img{
				width: 100%;
			}
			.detail{
				width: 90%;
				.titleInMore{
					font-size: 2rem;
				}
				.imgInsideMore{
					width: 90%;
					height: auto;
				}
				.info{
					width: 90%;
					h3 {
						font-size: 1.8rem;
					}
					p{
						width: 100%;
						font-size: 1.6rem;
					}
				}
			}
			.btnContainer{
				button{
					font-size: 1.6rem;
					padding: 0.5rem 1rem;
				}
			}
		}
	}
`;

const StyledReactPaginate = Styled(ReactPaginate)`
	display: flex;
	list-style: none;
	width: fit-content;
	margin: 0 auto;
	padding: 0;
	li {
		margin: 10px;
		padding: 5px;
	}
	li.selected {
		background-color: #1982c4;
		color: #fff;
	}
`;
