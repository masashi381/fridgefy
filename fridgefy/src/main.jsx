import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageA from './Pages/PageA.jsx'
import PageB from './Pages/PageB.jsx'
import PageC from './Pages/PageC.jsx'
import { UserContext } from "./Context/UserContext.jsx";
import Protected from './Components/Protected.jsx'


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
      <PageB />
    </Protected>
  },
  {
    path: "shoppingList",
    element: 
    <Protected>
      <PageC />
    </Protected>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  </React.StrictMode>,
)
