import React from "react";
import Icon from "@mdi/react";
import { mdiCopyright } from "@mdi/js";
import "boxicons";

const Navbar = () => {
  return (
    <div className=" row-start-1 col-start-1 row-span-full pt-3 pl-8">
      <h1 className="text-gray-700 text-2xl font-semibold flex ">
        Personote
        <Icon path={mdiCopyright} size={0.6} />
      </h1>
      <nav className="flex flex-col text-gray-400 gap-2 pt-8 font-medium text-sm">
        <ul className=" flex gap-3 flex-col">
          <li className="text-gray-700 flex align-center gap-1">
            <box-icon type="solid" name="dashboard"></box-icon>
            <a href="">Dashboard</a>
          </li>
          <li className="flex align-center gap-1">
            <box-icon name="task" color="rgb(156 163 175)"></box-icon>
            <a href="">Tasks</a>
          </li>
          <li className="flex align-center gap-1">
            <box-icon name="buildings" color="rgb(156 163 175)"></box-icon>
            <a href="">Companies</a>
          </li>
          <li className="flex align-center gap-1">
            <box-icon name="cog" color="rgb(156 163 175)"></box-icon>
            <a href="">Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
