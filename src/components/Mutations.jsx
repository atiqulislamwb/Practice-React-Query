import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { usePostsData, useAddPostData } from "../customHooks/usePostsData.js";
import { Link } from "react-router-dom";

const Mutations = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { isLoading, error, isError, isFetching, refetch, data } =
    usePostsData();
  const { mutate: addPost } = useAddPostData();

  const handleSubmit = () => {
    const post = { title, body };
    addPost(post);
    setTitle("");
    setBody("");
  };

  if (isLoading || isFetching) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 mt-12">
        <input
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title...."
          className="input w-full max-w-xs border-red-900 border-2"
        />
        <input
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="body....."
          className="input w-full max-w-xs border-red-900 border-2"
        />
        <button onClick={handleSubmit} className="btn btn-accent">
          Add post
        </button>
        <button onClick={refetch} className="btn btn-error">
          Fetch post
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-6 mt-12 justify-center">
        {data?.data?.map((item) => (
          <div
            key={item.id}
            className="border-2 shadow-lg rounded-md border-red-200 w-72 h-72  items-center justify-center"
          >
            <p className="text-xl font-bold">{item.title}</p>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mutations;
