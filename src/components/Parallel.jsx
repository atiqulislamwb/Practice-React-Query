import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchTodos = (id) => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};
const fetchPosts = (id) => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

const Parallel = () => {
  const {
    data: todosData,
    isLoading: todosLoading,
    error: todosError,
  } = useQuery("todos", fetchTodos);
  const {
    data: postsData,
    isLoading: postLoading,
    error: postsError,
  } = useQuery("posts", fetchPosts);

  console.log(todosData?.data);
  console.log(postsData?.data);

  return (
    <div className="mt-20 flex items-center justify-center text-6xl font-bold">
      Inspect the page see the results in console
    </div>
  );
};

export default Parallel;
