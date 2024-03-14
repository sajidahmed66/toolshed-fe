import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: FC = () => {
  const { pathname } = useLocation();
  console.log(location);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Toolshed</a>
      </div>
      <div className="flex-none gap-2">
        {(pathname === "/inventory/add" ||
          pathname === "/inventory/edit" ||
          pathname === "/") && (
          <Link
            to="/inventory-list"
            className="btn btn-primary rounded-lg text-white"
          >
            inventory
          </Link>
        )}
        {pathname === "/inventory-list" && (
          <Link
            to="/inventory/add"
            className="btn btn-primary  rounded-lg text-white"
          >
            Add Tools
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
