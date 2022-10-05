import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "../User";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
      setLoading(false);
    });
  }, []);
  if (loading)
    return (
      <progress className="progress w-56 flex justify-center items-center"></progress>
    );
  return (
    <>
      <div className="flex flex-wrap gap-8 items-center justify-start md:justify-center">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Users;
