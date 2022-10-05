import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchComments = (page) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/comments?_limit=10&_page=${page}`
  );
};

const PaginatedQueries = () => {
  const [page, setPage] = useState(1);

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(["comments", page], () => fetchComments(page), {
      keepPreviousData: true,
    });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {data &&
          data?.data?.map((item) => {
            const { id, name, email, body } = item;
            return (
              <div
                key={id}
                className="w-60 h-60 shadow-lg flex flex-col items-center justify-center "
              >
                <p className="text-xl text-center text-black font-bold">
                  {name}
                </p>
                <p>{email}</p>
                <p>{body.slice(0, 80)}</p>
              </div>
            );
          })}
      </div>
      <div className="flex  items-center justify-center gap-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((old) => old - 1)}
          className="btn btn-primary"
        >
          Prev Page
        </button>
        <button
          disabled={page === 40}
          onClick={() => setPage((old) => old + 1)}
          className="btn btn-success"
        >
          Next Page
        </button>
        {isFetching ? <span> Loading...</span> : null}
      </div>
    </>
  );
};

export default PaginatedQueries;
