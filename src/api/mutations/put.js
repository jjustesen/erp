require("dotenv/config");

//Clientes clientes
export const mutationPutClientesById = ({ id }, fields) => {
  const url = `${process.env.REACT_APP_API_URL}/clientes/${id}/`;

  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
};

//Funcionarios funcionarios
export const mutationPutFuncionariosById = ({ id }, fields) => {
  const url = `${process.env.REACT_APP_API_URL}/funcionarios/${id}/`;

  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
};

//Produtos produtos
export const mutationPutProdutosById = ({ id }, fields) => {
  const url = `${process.env.REACT_APP_API_URL}/produtos/${id}/`;

  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
};

//Hospedarioas hospedarias
export const mutationPutHospedarioasById = ({ id }, fields) => {
  const url = `${process.env.REACT_APP_API_URL}/hospedarias/${id}/`;

  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
};

//CaixaDiario caixa-diario
export const mutationPutCaixaDiarioById = ({ id }, fields) => {
  const url = `${process.env.REACT_APP_API_URL}/caixa-diario/${id}/`;

  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });
};
