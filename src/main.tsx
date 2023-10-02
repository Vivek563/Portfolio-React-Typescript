import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import PageRoute from './components/PageRoute/PageRoute'
import About from './components/About/About'
import Contact from './components/Contact/Connect'
import Project from './components/Project/Project'
import App from './App'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route path='' element={<PageRoute />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact/>} />
      <Route path='project' element={<Project/>} />
    
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)
