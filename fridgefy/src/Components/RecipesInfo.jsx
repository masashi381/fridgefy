import recipes from "../backend/data/recipes.json";
import Styled from "styled-components";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const Ul=Styled.ul`
    width: 800px;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: relative;
    padding: 0;
    margin: 0 auto;
`;

const Li=Styled.li`
    width: 220px;
    border: 1px solid grey;
    margin: 10px 0;
    box-sizing: border-box;
    background: lightgreen;
`;

const Detail=Styled.div`
    display:none;
    position: absolute;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.9);
    width: 70%;
    border: 1px solid grey;
    box-sizing: border-box;
`;

const XButtonDiv=Styled.div`
    position: absolute;
    top:3px;
    right:3px;
    width: 15px;
    height: 15px;
`;

const H2=Styled.h2`
    text-align: center;
    margin: 10px auto;
`;

const Img=Styled.img`
    width: 100%;
`;

const Img2=Styled.img`
    width: 80%;
    margin: 0 auto;
    display: block;
`;

const ButtonDiv=Styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
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
        background-color: lightgreen;
    }
`;

const IngredientsDiv = Styled.div`
width: 80%;
margin: 0 auto;
    h3 {
        margin-bottom: 0;
    }
    p {
        margin-top: 5px;
    }
`;

export default function RecipesInfoDiv(){
    // console.log("info:",recipes.recipes)
    // console.log("info:",recipes.recipes[0]["title"])
    // console.log("info:",recipes.recipes[0]["extendedIngredients"][0]["aisle"])

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 15;

    const totalPages = Math.ceil(recipes.recipes.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const subset = recipes.recipes.slice(startIndex, endIndex);

    const switchDetail=(e)=>{
        if(e.target.textContent=="More"){
            document.querySelectorAll(".detail").forEach(val=>{
                val.style.display="none"
            })
        }
        const targrt=e.target.closest("li").querySelector(".detail")
        targrt.style.top=window.pageYOffset+"px"
        targrt.style.display=(targrt.style.display == 'block') ? 'none' :'block'
    }

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    return (
        <div>
            <Ul>
                {subset.map((post, index) => (
                    // <div key={item.id}>{item.title}</div>
                    <Li key={index} className={index}>
                    <Img src={post["image"]}/>
                    <Detail className="detail">
                        <XButtonDiv onClick={switchDetail}><i className="fa-solid fa-square-xmark"></i></XButtonDiv>
                        <H2>{post["title"]}</H2>
                        <Img2 src={post["image"]}/>
                        {/* <div>Ingredients: {post["extendedIngredients"][0]["name"]}</div> */}
                        <IngredientsDiv>
                            <h3>Ingredients:</h3>
                            <p>
                                {post["extendedIngredients"].map((val,index)=>(
                                <span key={index}>{val.name},&nbsp;</span>
                                ))}
                            </p>
                        </IngredientsDiv>
                    </Detail>
                    <ButtonDiv>
                        <button onClick={switchDetail}>More</button>
                        <button>Add</button>
                    </ButtonDiv>
                </Li>
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
    )
}