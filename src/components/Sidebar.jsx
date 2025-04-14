import React from "react";
import K from "../constants";
import { NavLink } from "react-router";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className=" flex flex-col w-60 gap-y-6 bg-[#BD701A] h-screen px-2 py-4 fixed top-0 left-0">
<span className=" text-white font-semibold">CrownMekk</span>
      <span className="text-white"></span>
      <div className=" flex flex-col gap-y-6">
        {K.NAVLINKS.map((link, index) => {
          return (
            <NavLink
              key={index}
              to={link.path}
              className="text-white font-bold font-sans text-2 hover:bg-[#5c6064] px-3 py-2 w-full rounded-md flex gap-x-2 items-center"
            >
              <link.icon className="w-6 h-6" />
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </div >
      <div className="flex text-white font-bold font-sans text-2 hover:bg-[#5c6064] px-3 py-2 w-full rounded-md  gap-x-2 items-center">
      <CiLogout className="text-2xl"/>
      <Link to={"/"}>
      <button className="mt-auto">Logout</button>
      </Link>
      
      </div>
      
    



     

    </div>
  );
};

export default Sidebar;
