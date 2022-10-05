import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
const useUsersData = () => {
  return useQuery("users", fetchUsers, {
    // cacheTime: 5000,
    // staleTime: 0,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    //polling--->
    // refetchInterval: 50000000000,
    // refetchIntervalInBackground:true,
    //useQuery on click--->
    // onSuccess: onSuccess,
    // onError: onError,
    // select: (data) => {
    //data transformation--also give you filtering option
    //   const name = data?.data?.map((user) => user.name);
    //   return name;
    // },
  });
};

export default useUsersData;
