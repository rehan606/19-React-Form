/* eslint-disable no-dupe-keys */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, Form, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import StateForm from './components/StateForm.jsx'
import SimpleForm from './components/SimpleForm.jsx'
import RefForm from './components/RefForm.jsx'
import ReUsableForm from './components/ReUsableForm.jsx'
import GrandPa from './components/FormMaster/GrandPa.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/simpleForm",
        element: <SimpleForm></SimpleForm>
      },
      {
        path: "/stateForm",
        element: <StateForm></StateForm>
      },
      {
        path: "/refForm",
        element: <RefForm></RefForm>
      },
      {
        path: "/formMaster",
        element: <GrandPa></GrandPa>
      },
      {
        path: "/reUsableForm",
        element: <ReUsableForm formTitle={'Sign Up'}></ReUsableForm>,
        element: <ReUsableForm formTitle={'Profile Update'} submitBtnText='Update'></ReUsableForm>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
