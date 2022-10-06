import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { request } from "../utils/axios-utils";
const fetchUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
  //return request({ url: "/posts" });
};
const addPost = (post) => {
  return axios.post("https://jsonplaceholder.typicode.com/posts", post);
  //return request({ url: `/posts`, method: "POST", data: post });
};
export const usePostsData = () => {
  return useQuery("posts", fetchUsers);
};

export const useAddPostData = () => {
  const queryClient = useQueryClient();
  return useMutation(addPost, {
    // onSuccess: (data) => {
    //   //query validation------->
    //   //   queryClient.invalidateQueries("posts")
    //   //handling mutations response--------->
    //   queryClient.setQueryData("posts", (oldQueryData) => {
    //     return { ...oldQueryData, data: [...oldQueryData.data, data.data] };
    //   });
    // },

    //optimistic update------>When you optimistically update your state before performing a mutation, there is a chance that the mutation will fail.
    //In most of these failure cases, you can just trigger a refetch for your optimistic queries to revert them to their true server state. In some circumstances though, refetching may not work correctly and the mutation
    //error could represent some type of server issue that
    //won't make it possible to refetch. In this event, you can instead choose to rollback your update.
    onMutate: async (newPost) => {
      await queryClient.cancelQueries("posts");

      // Snapshot the previous value
      const previousPost = queryClient.getQueryData("posts");

      // Optimistically update to the new value
      queryClient.setQueryData("posts", (old) => {
        return {
          ...old.data,
          data: [...old.data, { id: old?.data?.length + 1, ...newPost }],
        };
      });

      // Return a context object with the snapshotted value
      return { previousPost };
    },
    onError: (err, newPost, context) => {
      queryClient.setQueryData("posts", context.previousPost);
    },
    onSettled: () => {
      queryClient.invalidateQueries("posts");
    },
  });
};
