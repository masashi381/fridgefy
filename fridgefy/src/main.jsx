import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { UserContext } from "./Context/UserContext.jsx";
import { FavoritesRecipesContext } from "./Context/FavoritesRecipesContext.jsx";

import Protected from "./Components/common/Protected.jsx";
import ShoppingList from "./Pages/ShoppingListPage.jsx";
import RecipesPage from "./Pages/RecipesPage.jsx";
import HomePage from "./Pages/Home.jsx";
import GlobalStyle from "./Components/common/GlobalStyle.jsx";
import { MyFridge } from "./Context/MyFridgeContext.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "home",
		element: (
			<Protected>
				<HomePage />
			</Protected>
		),
	},
	{
		path: "recipes",
		element: (
			<Protected>
				<RecipesPage />
			</Protected>
		),
	},
	{
		path: "shoppingList",
		element: (
			<Protected>
				<ShoppingList />
			</Protected>
		),
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<GlobalStyle />
		<UserContext>
			<FavoritesRecipesContext>
				<MyFridge>
					<RouterProvider router={router} />
				</MyFridge>
			</FavoritesRecipesContext>
		</UserContext>
	</>
);
