import React from "react";
import { NavLink } from "react-router-dom";
import "boxicons";

const NavItem = ({ title, iconName, path, iconType = "" }) => {
  return (
    <li>
      <NavLink
        className="flex items-center gap-1 mb-1 hover:text-black "
        to={path}
      >
        <box-icon name={iconName} type={iconType} color="#9CA3AF"></box-icon>
        {title}
      </NavLink>
    </li>
  );
};

export default NavItem;
