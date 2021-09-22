require("dotenv/config");

//Clientes clientes
export const mutationPostClientes = (fields) => {
  const url = `${process.env.REACT_APP_API_URL}/clientes/`;

  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
};

//Fucncionarios funcionarios
export const mutationPostFucncionarios = (fields) => {
  const url = `${process.env.REACT_APP_API_URL}/funcionarios/`;

  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
};

//Produtos produtos
export const mutationPostProdutos = (fields) => {
  const url = `${process.env.REACT_APP_API_URL}/produtos/`;

  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
};

//Hospedarias hospedarias
export const mutationPostHospedarias = (fields) => {
  const url = `${process.env.REACT_APP_API_URL}/hospedarias/`;

  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
};

//CaixaDiario caixa-diario
export const mutationPostCaixaDiario = (fields) => {
  const url = `${process.env.REACT_APP_API_URL}/caixa-diario/`;

  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
};
