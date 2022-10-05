import React from "react";
import useUsersData from "../../customHooks/useUsersData.js";
import axios from "axios";
// import { useQuery } from "react-query";
import User from "../User";
const ManualUsers = () => {
  const onSuccess = () => {
    console.log("Perform side effect after data fetching");
  };

  const onError = () => {
    console.log("Perform side effect after encountering error occur");
  };
  const { isLoading, error, isFetching, refetch, data } = useUsersData();

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {/* <button onClick={refetch} className="btn btn-warning">
        fetch data
      </button> */}
      <div className="flex flex-wrap gap-8 items-center justify-start md:justify-center">
        {data?.data?.map((user) => (
          <User key={user.id} user={user} />
        ))}

        {/* {data?.map((name) => (
          <div>{name}</div>
        ))} */}
      </div>
    </>
  );
};

export default ManualUsers;
