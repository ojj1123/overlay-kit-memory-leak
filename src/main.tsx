import React from 'react';
import ReactDOM from 'react-dom/client';
import { OverlayProvider } from 'overlay-kit';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import App from './App';
import { Page1 } from './pages/page-1';
import { Page2 } from './pages/page-2';
import { Page3 } from './pages/page-3';
import { Page4 } from './pages/page-4';
import { Page5 } from './pages/page-5';
import { Home } from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <OverlayProvider>
        <App />
      </OverlayProvider>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/page-1',
        element: <Page1 />,
      },
      {
        path: '/page-2',
        element: <Page2 />,
      },
      {
        path: '/page-3',
        element: <Page3 />,
      },
      {
        path: '/page-4',
        element: <Page4 />,
      },
      {
        path: '/page-5',
        element: <Page5 />,
      },
    ],
  },
  {
    path: '/outside-overlay-provider',
    element: (
      <>
        <h1>Outside OverlayProvider</h1>
        <Link to='/'>Home</Link>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
