import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={client}>
     <HelmetProvider>
        <AuthProvider>
          
             <div className='min-w-min max-w-7xl mx-auto'>
             <div><Toaster/></div>
               <RouterProvider router={Routes}></RouterProvider>
              </div>
        
          </AuthProvider>
          </HelmetProvider>
       </QueryClientProvider>
  </React.StrictMode>,
)
