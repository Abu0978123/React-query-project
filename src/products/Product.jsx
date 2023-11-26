import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Product() {
  const params = useParams();
  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.put(
        `https://dummyjson.com/products/${params.productID}`,
        newTodo
      );
    },
  });
  const fetchData = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/${params.productID}`
    );
    const data = await response.json();
    return data;
  };
  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["products", params.productID],
    queryFn: fetchData,
  });
  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  if (mutation.isLoading) {
    return <h3>Updating...</h3>;
  }

  if (mutation.isError) {
    return <h3>Error while updating. {mutation.error.message}</h3>;
  }

  return (
    <>
      <div>Product: {product.title}</div>

      <button
        onClick={() => {
          mutation.mutate({ title: "Updated product" });
        }}
      >
        Create product
      </button>
    </>
  );
}
