import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';
import { router } from './Routes/Routes.jsx';
import Bookcontext from './Component/Context/Bookcontext.jsx';
import { ToastContainer } from 'react-toastify';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bookcontext>
 <RouterProvider router={router} />,
 <ToastContainer />
    </Bookcontext>
   
  </StrictMode>,
)
