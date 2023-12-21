import { createBrowserRouter } from "react-router-dom";

import Root from "./Layout/Root/Root";
import Home from "./Layout/Home/Home";
import SignUp from "./Layout/Register/SignUp";

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
      ],
    },
  ]);


  export default router;