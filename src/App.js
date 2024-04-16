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
import Cart from './features/cart/Cart';
import CartPage from './Pages/CartPage';

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
 
]);


function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    
    </div>
  );
}

export default App;
