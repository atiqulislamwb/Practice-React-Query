import React from "react";
import axios from "axios";
import { useQuery, useInfiniteQuery } from "react-query";

const fetchComments = ({ pageParam = 1 }) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/comments?_limit=10&_page=${pageParam}`
  );
};

const InfinteQueries = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("comments", fetchComments, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 50) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {data?.pages?.map((group, i) => (
          <React.Fragment key={i}>
            {group?.data?.map((item) => (
              <div
                key={item.id}
                className="w-60 h-60 shadow-lg flex flex-col items-center justify-center "
              >
                <p className="text-xl text-center text-black font-bold">
                  {item.name}
                </p>
                <p>{item.email}</p>
                <p>{item.body.slice(0, 80)}</p>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="btn btn-error text-center"
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </div>
    </>
  );
};

export default InfinteQueries;
