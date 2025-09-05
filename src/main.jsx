import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'preline/preline';
import { RouterProvider } from 'react-router';
import { router } from './Router/Router.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './PRovider/AuthProvider.jsx';

const queryClient = new  QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
