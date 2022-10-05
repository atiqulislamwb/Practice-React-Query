import { useQueries } from "react-query";
import axios from "axios";
const DynamicParallel = ({ ids }) => {
  const fetchUsers = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  };

  const results = useQueries(
    ids.map((id) => {
      return { queryKey: ["user", id], queryFn: () => fetchUsers(id) };
    })
  );
  console.log(results);

  return (
    <div className="mt-20 flex items-center justify-center text-6xl font-bold">
      Inspect the page see the results in console--Dynamic users details
    </div>
  );
};

export default DynamicParallel;
