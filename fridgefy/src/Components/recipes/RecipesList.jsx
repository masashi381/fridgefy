import Styled from "styled-components";
import { useState, useContext } from "react";
import ReactPaginate from "react-paginate";
import { FavoritesRecipes } from "../../Context/FavoritesRecipesContext";

export default function RecipesList({ list }) {
	const [currentPage, setCurrentPage] = useState(0);
	const { dispatch } = useContext(FavoritesRecipes);

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
		console.log("favorite", favorite);
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
							<img src={item["image"]} />
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
	position: relative;
	padding: 0;
	margin: 0 auto;
	li{
		width: 22rem;
		border: 1px solid grey;
		margin: 1rem 0;
		border-radius: 0.5rem;
		background: #1982c4;
		box-sizing: border-box;
		img{
			width:  21.8rem;
			height: 15rem;
			object-fit: cover;
		}
		h2 {			
			text-align: center;
			margin: 1rem;
			font-family: "DM Mono", monospace;
			font-weight: 400;
			font-size: 1.8rem;
			/* color: #1982c4; */
		}
		.detail{
			display:none;
			position: absolute;
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
				}
			}
			.titleInMore{
				color: #1982c4;
			}
			img{
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
				}
				p{
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
				background-color:#ffca3a;
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
	}
`;
