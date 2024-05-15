import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes.jsx';
import FirebaseProvider from './provider/FirebaseProvider.jsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <FirebaseProvider>
        <RouterProvider router={router} />
        <Toaster />
      </FirebaseProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
