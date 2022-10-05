import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import useUser from "../customHooks/useUser.js";
const UserDetail = () => {
  const { id } = useParams();

  const { isLoading, error, isError, refetch, data } = useUser(id);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const { name, address, email, username, phone } = data?.data;
  return (
    <div className="flex flex-col mt-10 items-center justify-center">
      <p>Name:{name}</p>
      <p>Username:{username}</p>
      <p>Email:{email}</p>
      <p>Phone:{phone}</p>
      <p>City:{address.city}</p>
      <p>Street:{address.street}</p>
      <p>Suite:{address.suite}</p>
    </div>
  );
};

export default UserDetail;
