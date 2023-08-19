import { MyFridge } from "../Context/MyFridgeContext.jsx";
import MyFridgeInput from "./common/MyFridgeInput.jsx";
import MyFridgeList from "./MyFridgeList.jsx";
import RecipesPageSection from "../Pages/RecipesPage.jsx";
import ShoppingList from "../Pages/ShoppingListPage.jsx";
import Home from "../Pages/Home.jsx";

export default function FridgefyDiv(){
    return (

        <>
            <h1>Fridgefy</h1>
            <Home/>
        <MyFridge>
            <MyFridgeInput />
            <MyFridgeList />
        </MyFridge>            
            <RecipesPageSection/>
            <ShoppingList/>
        </>

    )
}