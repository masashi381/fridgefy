import Header from "../Components/common/Header"
import Recipes from "../Components/recipes/Recipes"
import MyFridgeList from "../Components/common/MyFridgeList"
import MyFridgeInput from "../Components/common/MyFridgeInput"
import MyFridgeComponent from "../Components/common/MyFridgeComponent"
import MyRecipesSec from "../Components/recipes/MyRecipes"
import styled from "styled-components"

export default function RecipesPageSection(){

    return (
        <section>
            <Header></Header>
            <RecipesPageDiv>

                <MyFridgeComponent/>
                <Recipes/>
                <MyRecipesSec/>

            </RecipesPageDiv>
            
        </section>
    )
}

const RecipesPageDiv=styled.div`
    display: flex;
    justify-content: space-between;
`;