import Navbar from "@/components/common/ui/nav-bar";
import { FC } from "react";

const Card: FC = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Tool Type 1</h2>
        <p>A very Usefull Tool</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary rounded-md">Details</button>
        </div>
      </div>
    </div>
  );
};

const InventoryListingPage: FC = () => {
  return (
    <>
      <Navbar />
      <div className="px-8 py-12 w-full max-w-7xl mx-auto">
        {/* breadcrumb */}
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
              {/*               
              <li>
                <a>
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
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  Documents
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
                  Add Document
                </span>
              </li>
             */}
            </ul>
          </div>
        </>
        <div className="flex flex-row flex-wrap items-center justify-around gap-y-4">
          {[1, 2, 3, 5, 6, 7, 8, 9, 0, 11, 22, 33, 44, 55, 66, 77, 778].map(
            (e) => (
              <Card key={e} />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default InventoryListingPage;
