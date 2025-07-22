import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import Home from './pages/Home'
import About from './pages/About'

const router = createBrowserRouter([
  {
    path : '/',
    element : <PageLayout />,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/home',
        element : <Home />
      },
      {
        path : '/about',
        element : <About />
      },
    ]
  },
  {

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
