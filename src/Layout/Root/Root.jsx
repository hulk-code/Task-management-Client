import { Outlet } from "react-router-dom";

import Navbar from "../Shared/Navber/Navber";


const Root = () => {
    return (
        <div>

      <Navbar></Navbar>

           <Outlet></Outlet> 
        </div>
    );
};

export default Root;