import Navbar from "@/components/common/ui/nav-bar";
import { FC } from "react";

const SearchPage: FC = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />
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
