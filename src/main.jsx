import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import Post from './components/pages/Post';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Home />
  },
  {
    path: "post/:slug",
    element: <Post/>,
    errorElement: <Home />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
