import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SearchPage from "@/pages/search/index.page";
import InventoryListingPage from "@/pages/inventory/index.page";
import AddToolsPage from "@/pages/inventory/add.page";
import EditPage from "@/pages/inventory/edit.page";
//
const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/inventory-list",
    element: <InventoryListingPage />,
  },
  {
    path: "/inventory/add",
    element: <AddToolsPage />,
  },
  {
    path: "inventory/edit",
    element: <EditPage />,
  },
]);
//
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
