import { MyFridge } from "../Context/MyFridgeContext.jsx";
import MyFridgeComponent from "./MyFridgeComponent.jsx";
import MyFridgeList from "./MyFridgeList.jsx";
import RecipesPageSection from "./RecipesPage.jsx";
import ShoppingList from "../Pages/ShoppingListPage.jsx";
import Home from "../Pages/Home.jsx";

export default function FridgefyDiv(){
    return (

        <>
            <h1>Fridgefy</h1>
        <MyFridge>
            <MyFridgeComponent />
            <MyFridgeList />
        </MyFridge>
            <Home/>
            <RecipesPageSection/>
            <ShoppingList/>
        </>

    )
}