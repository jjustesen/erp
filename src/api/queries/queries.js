import { useQuery } from "react-query";
require("dotenv/config");

//Clientes clientes
export const queryGetClientes = () => {
  let url = `${process.env.REACT_APP_API_URL}/clientes/`;
  return fetch(url).then((resp) => resp.json());
};
export const useQueryGetClientes = (queryParams, config) => {
  return useQuery("getClientes", () => queryGetClientes(queryParams), config);
};
useQueryGetClientes.queryKey = "getClientes";

export const queryGetClientesById = ({ id }) => {
  let url = `${process.env.REACT_APP_API_URL}/clientes/${id}/`;
  return fetch(url).then((resp) => resp.json());
};
export const useQueryGetClientesById = (pathParams, queryParams, config) =>
  useQuery(
    "getClientesById",
    () => queryGetClientesById(pathParams, queryParams),
    config
  );
useQueryGetClientesById.queryKey = "getClientesById";

//Funcionarios funcionarios
export const queryGetFuncionarios = () => {
  let url = `${process.env.REACT_APP_API_URL}/funcionarios/`;
  return fetch(url).then((resp) => resp.json());
};
export const useQueryGetFuncionarios = (queryParams, config) => {
  return useQuery(
    "getFuncionarios",
    () => queryGetFuncionarios(queryParams),
    config
  );
};
useQueryGetFuncionarios.queryKey = "getFuncionarios";

export const queryGetFuncionariosById = ({ id }) => {
  let url = `${process.env.REACT_APP_API_URL}/funcionarios/${id}/`;
  return fetch(url).then((resp) => resp.json());
};
export const useQueryGetFuncionariosById = (pathParams, queryParams, config) =>
  useQuery(
    "getFuncionariosById",
    () => queryGetFuncionariosById(pathParams, queryParams),
    config
  );
useQueryGetFuncionariosById.queryKey = "getFuncionariosById";

//Produtos produtos
export const queryGetProdutos = () => {
  let url = `${process.env.REACT_APP_API_URL}/produtos/`;
  return fetch(url).then((resp) => resp.json());
};
export const useQueryGetProdutos = (queryParams, config) => {
  return useQuery("getProdutos", () => queryGetProdutos(queryParams), config);
};
useQueryGetProdutos.queryKey = "getProdutos";

export const queryGetProdutosById = ({ id }) => {
  let url = `${process.env.REACT_APP_API_URL}/produtos/${id}/`;
  return fetch(url).then((resp) => resp.json());
};
export const useQueryGetProdutosById = (pathParams, queryParams, config) =>
  useQuery(
    "getProdutosById",
    () => queryGetProdutosById(pathParams, queryParams),
    config
  );
useQueryGetProdutosById.queryKey = "getProdutosById";

//Hospedarias hospedarias
export const queryGetHospedarias = () => {
  let url = `${process.env.REACT_APP_API_URL}/hospedarias/`;
  return fetch(url).then((resp) => resp.json());
};
export const useQueryGetHospedarias = (queryParams, config) => {
  return useQuery(
    "getHospedarias",
    () => queryGetHospedarias(queryParams),
    config
  );
};
useQueryGetHospedarias.queryKey = "getHospedarias";

export const queryGetHospedariasById = ({ id }) => {
  let url = `${process.env.REACT_APP_API_URL}/hospedarias/${id}/`;
  return fetch(url).then((resp) => resp.json());
};
export const useQueryGetHospedariasById = (pathParams, queryParams, config) =>
  useQuery(
    "getHospedariasById",
    () => queryGetHospedariasById(pathParams, queryParams),
    config
  );
useQueryGetHospedariasById.queryKey = "getHospedariasById";

//CaixaDiario caixa-diario
export const queryGetCaixaDiario = () => {
  let url = `${process.env.REACT_APP_API_URL}/caixa-diario/`;
  return fetch(url).then((resp) => resp.json());
};
export const useQueryGetCaixaDiario = (queryParams, config) => {
  return useQuery(
    "getCaixaDiario",
    () => queryGetCaixaDiario(queryParams),
    config
  );
};
useQueryGetCaixaDiario.queryKey = "getCaixaDiario";

export const queryGetCaixaDiarioById = ({ id }) => {
  let url = `${process.env.REACT_APP_API_URL}/caixa-diario/${id}/`;
  return fetch(url).then((resp) => resp.json());
};
export const useQueryGetCaixaDiarioById = (pathParams, queryParams, config) =>
  useQuery(
    "getCaixaDiarioById",
    () => queryGetCaixaDiarioById(pathParams, queryParams),
    config
  );
useQueryGetCaixaDiarioById.queryKey = "getCaixaDiarioById";
