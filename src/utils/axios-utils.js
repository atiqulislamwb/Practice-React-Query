import axios from "axios";

const client = axios.create({
  baseUrl: "https://jsonplaceholder.typicode.com",
});

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token`;
  const onSuccess = (response) => response;
  const onError = (error) => {
    return error.message;
  };
  return client(options).then(onSuccess).catch(onError);
};
