import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageA from './Pages/PageA.jsx'
import { UserContext } from "./Context/UserContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "home",
    element: <PageA />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
    <RouterProvider router={router} />
    </UserContext>
  </React.StrictMode>,
)
