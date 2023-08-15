import RecipesPageSection from "./RecipesPage.jsx";
import ShoppingList from "../Pages/ShoppingListPage.jsx";
import Home from "../Pages/Home.jsx";

export default function FridgefyDiv(){
    return (

        <>
            <h1>Fridgefy</h1>
            <Home/>
            <RecipesPageSection/>
            <ShoppingList/>
        </>

    )
}