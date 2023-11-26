import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const fetchData = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};
export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ["products"], queryFn: fetchData });

  //   const [products, setProducts] = useState();
  //   const [isLoading, setLoading] = useState();
  //   const [error, setError] = useState();
  //   useEffect(() => {
  //     const fetchData = async () => {
  //      try {
  //         setLoading(true);
  //         setError(null)
  //         const response = await fetch("https://dummyjson.com/products");
  //         const data = await response.json();
  //         setProducts(data.products);
  //         setLoading(false);
  //      } catch (err) {
  //         setError(err)
  //         setLoading(false);
  //      }
  //     };

  //     fetchData();
  //   }, []);

  // this is Loading condition
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  //   this is Error handling condition
  if (error) {
    return <h1>Message : {error.message}</h1>;
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products
            ? products.map((items) => (
                <div key={items.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={items.thumbnail}
                      alt={items.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link to={`/products/${items.id}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {items.title}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {items.category}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {items.price}
                    </p>
                  </div>
                </div>
              ))
            : "no data foound"}
        </div>
      </div>
    </div>
  );
}
