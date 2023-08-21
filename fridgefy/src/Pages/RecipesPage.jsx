import Header from "../Components/common/Header"
import Recipes from "../Components/recipes/Recipes"
import MyFridgeList from "../Components/common/MyFridgeList"
import MyFridgeInput from "../Components/common/MyFridgeInput"

export default function RecipesPageSection(){

    return (
        <section>
            <Header></Header>
            <div>
                <MyFridgeInput/>
                <MyFridgeList/>
                
            </div>
            <Recipes/>
            
        </section>
    )
}