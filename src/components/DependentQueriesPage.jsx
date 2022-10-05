import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
//dependent query means dynamic api dependent like on email,name,id,search params

const fetchUser = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};

const fetchComments = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
};

const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () => fetchUser(email));
  const id = user?.data.id;

  const { data } = useQuery(["comment", id], () => fetchComments(id), {
    enableQuery: !!id,
  });

  return <div>DependentQueriesPage</div>;
};

export default DependentQueriesPage;
