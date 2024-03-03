import React, { FC } from "react";
import { Link } from "react-router-dom";

const SearchPage: FC = () => {
  return (
    <>
      {/* navbar */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Toolshed</a>
        </div>
        <div className="flex-none gap-2">
          <Link
            to="/inventory-list"
            className="btn btn-primary rounded-lg text-white"
          >
            inventory
          </Link>
        </div>
      </div>
      {/* search component */}
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <button className="btn btn-primary  rounded-lg text-white ">
          Search
        </button>
      </div>
      {/* search result */}
      <div className="p-4 w-full"></div>
    </>
  );
};

export default SearchPage;
