import { Link } from "react-router-dom";

const AddToolsPage = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow ">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Toolshed
          </Link>
        </div>
        <div className="flex-none gap-2">
          <Link
            to="/inventory-list"
            className="btn btn-primary  rounded-lg text-white"
          >
            Add Tools
          </Link>
        </div>
      </div>
      <div className="px-8 py-12 w-full max-w-7xl mx-auto">
        <>
          <div className="text-base breadcrumbs pb-6">
            <ul>
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mr-1 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  All Tools
                </a>
              </li>

              <li>
                <span className="inline-flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  Add
                </span>
              </li>
            </ul>
          </div>
        </>
        {/* form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col gap-2"
        >
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input type="text" className="grow" placeholder="Daisy" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            Category
            <input type="text" className="grow" placeholder="Daisy" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            Location
            <input type="text" className="grow" placeholder="Daisy" />
          </label>
          {/*  */}
          <label className="form-control w-full max-w-xs">
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>

          <button className="w-32 btn btn-primary rounded" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddToolsPage;
