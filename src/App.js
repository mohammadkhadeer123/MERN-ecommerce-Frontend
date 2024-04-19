import React from 'react';

import './App.css';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './features/auth/components/Login';
import Signup from './features/auth/components/Signup';

import CartPage from './Pages/CartPage';
import CheckOut from './Pages/CheckOut';

import ProductDetailsPage from './Pages/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/Login",
    element: (<Login></Login>),
  },
  {
    path: "/Signup",
    element: (<Signup></Signup>),
  },
  {
    path: "/Cart",
    element: (<CartPage></CartPage>),
  },
  {
    path: "/CheckOut",
    element: (<CheckOut></CheckOut>),
  },
  {
    path: "/Product-Details-Page",
    element: (<ProductDetailsPage></ProductDetailsPage>),
  },
 
]);


function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    
    </div>
  );
}

export default App;
