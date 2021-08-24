import { useQuery } from "react-query";
require("dotenv/config");

export const queryGetHotels = () => {
  let url = `${process.env.REACT_APP_API_URL}/?uuid=${process.env.REACT_APP_API_KEY}`;
  return fetch(url).then((resp) => resp.json());
};

export const useQueryGetHotels = (queryParams, config) => {
  return useQuery("getHotels", () => queryGetHotels(queryParams), config);
};
useQueryGetHotels.queryKey = "getHotels";

export const queryGetHotelsById = ({ id }) => {
  let url = `${process.env.REACT_APP_API_URL}/${id}/?uuid=${process.env.REACT_APP_API_KEY}`;

  return fetch(url).then((resp) => resp.json());
};

export const useQueryGetHotelsById = (pathParams, queryParams, config) =>
  useQuery(
    "getHotelsById",
    () => queryGetHotelsById(pathParams, queryParams),
    config
  );
useQueryGetHotelsById.queryKey = "getHotelsById";

export const queryGetClientes = () => {
  return fetch(process.env.REACT_APP_API_USUARIOS_URL).then((resp) =>
    resp.json()
  );
};

export const useQueryGetClientes = (queryParams, config) =>
  useQuery("getClientes", () => queryGetClientes(queryParams), config);
useQueryGetClientes.queryKey = "getClientes";
