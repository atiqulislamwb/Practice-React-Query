import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ManualUsers from "./components/ManualUsers/ManualUsers";
import Users from "./components/Users/Users";
import Home from "./components/Home";
import { ReactQueryDevtools } from "react-query/devtools";
import UserDetail from "./components/UserDetail";
import Parallel from "./components/Parallel";
import DynamicParallel from "./components/DynamicParallel.page";
import DependentQueriesPage from "./components/DependentQueriesPage";
import PaginatedQueries from "./components/PaginatedQueries";
import InfinteQueries from "./components/InfinteQueries";
import Mutations from "./components/Mutations";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rqusers" element={<ManualUsers />} />
        <Route path="/rqusers/:id" element={<UserDetail />} />
        <Route path="/mutation" element={<Mutations />} />
        <Route path="/users" element={<Users />} />
        <Route path="/parallel" element={<Parallel />} />
        <Route path="/infinte-queries" element={<InfinteQueries />} />
        <Route path="/paginated-queries" element={<PaginatedQueries />} />
        <Route
          path="/dynamic-parallel"
          element={<DynamicParallel ids={[1, 5]} />}
        />
        <Route
          path="/dependent-queries"
          element={
            <DependentQueriesPage email="atiqulislarussell0@gmail.com" />
          }
        />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </div>
  );
}

export default App;
