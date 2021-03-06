import React from "react";
import Icon from "@mdi/react";
import { mdiCopyright } from "@mdi/js";
import { pages } from "../data/navpages";
import "boxicons";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className=" row-start-1 col-start-1 row-span-full pt-3 pl-8">
      <h1 className="text-gray-700 text-2xl font-semibold flex ">
        Personote
        <Icon path={mdiCopyright} size={0.6} />
      </h1>
      <nav className="flex flex-col text-gray-400 gap-2 pt-8 font-medium text-sm">
        <ul className=" flex gap-3 flex-col">
          {pages.map(({ title, iconName, path, iconType }, index) => {
            return (
              <NavItem
                title={title}
                iconName={iconName}
                iconType={iconType}
                path={path}
                key={index}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
