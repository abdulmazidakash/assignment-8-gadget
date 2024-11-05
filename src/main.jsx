import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ProductDetail from './components/ProductDetail';
import ErrorPage from './components/ErrorPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/data/products.json'), // Adjust the path as needed
      },
      {
        path: 'products/:productId',
        element: <ProductDetail />,
        loader: async ({ params }) => {
          const response = await fetch('/data/products.json');
          const data = await response.json();
          return data.find(product => product.product_id === parseInt(params.productId));
        },
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
