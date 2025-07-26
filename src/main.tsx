import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import Home from './Home';
import Kitchen from './kitchen';
import Customer from './customer';
import './globals.css';
import { Button } from './components/ui/button';

const AppLayout = () => {
  return (
    <>
      <nav className="p-4 bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between">
          <Link to="/" className="font-bold text-xl">Orderly Meals</Link>
          <div>
            <Button asChild variant="link">
              <Link to="/kitchen">Kitchen</Link>
            </Button>
            <Button asChild variant="link">
              <Link to="/customer">Customer</Link>
            </Button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "kitchen",
        element: <Kitchen />,
      },
      {
        path: "customer",
        element: <Customer />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
