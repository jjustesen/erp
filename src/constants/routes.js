export const routes = [
  {
    name: "Cadastro",
    children: [
      { name: "Clientes", path: "/clientes" },
      { name: "Funcionarios", path: "/funcionarios" },
      { name: "Hospedarias", path: "/hospedarias" },
      { name: "Produtos", path: "/produtos" },
    ],
  },
  {
    name: "Financeiro",
    children: [
      { name: "Caixa geral", path: "/caixa-geral" },
      // { name: "Caixa diario", path: "/caixa-diario" },
    ],
  },
];
