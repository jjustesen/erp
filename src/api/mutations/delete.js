require("dotenv/config");

//Clientes  clientes
export const mutationDeleteClientesById = ({ id }) => {
  const url = `${process.env.REACT_APP_API_URL}/clientes/${id}/`;

  return fetch(url, {
    method: "DELETE",
  });
};

//Funcionarios  funcionarios
export const mutationDeleteFuncionariosById = ({ id }) => {
  const url = `${process.env.REACT_APP_API_URL}/funcionarios/${id}/`;

  return fetch(url, {
    method: "DELETE",
  });
};

//Produtos  produtos
export const mutationDeleteProdutosById = ({ id }) => {
  const url = `${process.env.REACT_APP_API_URL}/produtos/${id}/`;

  return fetch(url, {
    method: "DELETE",
  });
};

//Hospedarias  hospedarias
export const mutationDeleteHospedariasById = ({ id }) => {
  const url = `${process.env.REACT_APP_API_URL}/hospedarias/${id}/`;

  return fetch(url, {
    method: "DELETE",
  });
};

//CaixaDiario  caixa-diario
export const mutationDeleteCaixaDiarioById = ({ id }) => {
  const url = `${process.env.REACT_APP_API_URL}/caixa-diario/${id}/`;

  return fetch(url, {
    method: "DELETE",
  });
};
