import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <QueryClientProvider client={client}>
 <div className='min-w-min max-w-5xl mx-auto'>
 <RouterProvider router={Routes}></RouterProvider>
 </div>
 </QueryClientProvider>
  </React.StrictMode>,
)
