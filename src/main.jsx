import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  QueryClient,
  useMutation,
  QueryClientProvider,
} from "@tanstack/react-query";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Products from "./products/Products.jsx";
import Product from "./products/Product.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:productID",
    element: <Product />,
  },
  {
    path: "*",
    element: (
      <div>
        <h1>sorry! page was not found</h1>
        <Link to={"/"}>
          <button className="text-white bg-blue-700 hover:bg-blue-800 ">
            go to home page
          </button>
        </Link>
      </div>
    ),
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
