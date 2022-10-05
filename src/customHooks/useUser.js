import React from "react";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchUser = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};
const useUser = (id) => {
  //   const queryClient = useQueryClient();
  return useQuery(["user", id], () => fetchUser(id));
};

export default useUser;
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

//initail data
// const queryClient = useQueryClient();
// return useQuery(["user", id], fetchUsers, {
//   initialData: () => {
//     const name = queryClient
//       .getQueryData("user")
//       ?.data?.find((id) => id.id === parseInt(id));
//     if (name) {
//       return { data: name };
//     } else {
//       return undefined;
//     }
//   },
// });
