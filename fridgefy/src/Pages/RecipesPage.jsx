import Header from "../Components/common/Header"
import Recipes from "../Components/recipes/Recipes"
import MyFridgeList from "../Components/common/MyFridgeList"
import MyFridgeInput from "../Components/common/MyFridgeInput"
import MyFridgeComponent from "../Components/common/MyFridgeComponent"

export default function RecipesPageSection(){

    return (
        <section>
            <Header></Header>
            <MyFridgeComponent/>
            <Recipes/>
            
        </section>
    )
}