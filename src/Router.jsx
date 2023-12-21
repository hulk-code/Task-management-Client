import { createBrowserRouter } from "react-router-dom";

import Root from "./Layout/Root/Root";
import Home from "./Layout/Home/Home";
import SignUp from "./Layout/Register/SignUp";
import LogIn from "./Layout/Register/Login/Login";

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
  ]);


  export default router;