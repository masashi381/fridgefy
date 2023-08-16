import { MyFridge } from "../Context/MyFridgeContext.jsx";
import MyFridgeComponent from "./MyFridgeComponent.jsx";
import RecipesPageSection from "./RecipesPage.jsx";

export default function FridgefyDiv(){
    return (

        <>
            <h1>Fridgefy</h1>
        <MyFridge>
            <MyFridgeComponent />
        </MyFridge>
            <RecipesPageSection/>
        </>

    )
}