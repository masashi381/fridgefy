import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageA from './Pages/PageA.jsx'
import { UserContext } from "./Context/UserContext.jsx";
import Protected from './Components/common/Protected.jsx'
import ShoppingList from './Pages/ShoppingListPage.jsx'
import RecipesPage from './Pages/RecipesPage.jsx'
import GlobalStyle from './Components/common/GlobalStyle.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "home",
    element: 
    
    <Protected>
      <PageA />
    </Protected>
    
  },
  {
    path: "recipes",
    element: 
    <Protected>
      <RecipesPage />
    </Protected>
  },
  {
    path: "shoppingList",
    element: 
    <Protected>
      <ShoppingList />
    </Protected>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  </React.StrictMode>,
)
