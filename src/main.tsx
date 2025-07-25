import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Kitchen from './kitchen';
import Customer from './customer';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Welcome to Orderly Meals</h1>
        <nav>
          <ul>
            <li>
              <Link to="kitchen">Kitchen</Link>
            </li>
            <li>
              <Link to="customer">Customer</Link>
            </li>
          </ul>
        </nav>
      </div>
    ),
  },
  {
    path: "kitchen",
    element: <Kitchen />,
  },
  {
    path: "customer",
    element: <Customer />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
