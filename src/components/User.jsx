import React from "react";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { id, name, phone, email, website } = user;
  return (
    <Link to={`/rqusers/${id}`}>
      <div className="w-72 h-60 shadow-lg mt-10 flex flex-col items-center justify-center">
        <p className="text-xl font-bold">{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>www.{website}</p>
      </div>
    </Link>
  );
};

export default User;
