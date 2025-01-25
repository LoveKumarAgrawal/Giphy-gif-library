import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import Home from './pages/home'
import Category from './pages/category'
import SearchPage from './pages/search'
import GifPage from './pages/single-gif'
import Favorites from './pages/favorites'
import GifProvider from './context/context'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/:category",
        element: <Category />
      },
      {
        path: "/search/:query",
        element: <SearchPage />
      },
      {
        path: "/:type/:slug",
        element: <GifPage />
      },
      {
        path: "/favorites",
        element: <Favorites />
      },
    ]
  }
])

function App() {

  return <GifProvider>
    <RouterProvider router={router} />
  </GifProvider>
}

export default App
