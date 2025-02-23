import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' 

import EventListing from './pages/EventListing'
import EventDetails from './pages/EventDetails'

const Layout = () => {
  return (
    <div style={{backgroundColor: '#EEE5FF', color: "#2D2D2D"}}>
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <EventListing />
      },
      {
        path: '/details',
        element: <EventDetails />
      }
    ]
    }])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
