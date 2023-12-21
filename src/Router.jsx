import { createBrowserRouter } from "react-router-dom";

import Root from "./Layout/Root/Root";
import Home from "./Layout/Home/Home";
import SignUp from "./Layout/Register/SignUp";
import LogIn from "./Layout/Register/Login/Login";
import Dashboard from "./Layout/Dashboard/Dashboard";
import Addtask from "./Layout/Dashboard/Addtask/Addtask";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
          path: "/signup",
          element:<SignUp></SignUp>,
        },
        {
          path: "/login",
          element:<LogIn></LogIn>,
        },
      ],
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "addtask",
          element:<Addtask></Addtask>,
        },
        
      ],
    },
  ]);


  export default router;