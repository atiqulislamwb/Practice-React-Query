import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-10">
      <div className="flex gap-8 item-center justify-center ">
        <Link className="btn btn-accent" to="">
          Home
        </Link>
        <Link className="btn btn-secondary" to="/rqusers">
          RQ Users
        </Link>
        <Link className="btn btn-primary" to="/users">
          Users
        </Link>
        <Link className="btn btn-active" to="/parallel">
          Parallel
        </Link>
        <Link className="btn btn-primary" to="/dynamic-parallel">
          Dynamic Parallel
        </Link>
        <Link className="btn btn-accent" to="/dependent-queries">
          Dependent-Queries
        </Link>
        <Link className="btn btn-error" to="/paginated-queries">
          Paginated-Queries
        </Link>
        <Link className="btn btn-warning" to="/infinte-queries">
          Infinte-Queries
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
