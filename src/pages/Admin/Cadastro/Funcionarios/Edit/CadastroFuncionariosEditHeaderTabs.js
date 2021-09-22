import React from "react";
import TabHeader from "../../../../../components/molecules/TabHeader/TabHeader";

const CadastroFuncionariosEditHeaderTabs = () => {
  const tabs = [
    { nome: "Dados basicos" },
    { nome: "Financeiro", disabled: true },
    { nome: "Extrato", disabled: true },
  ];

  return <TabHeader tabs={tabs}></TabHeader>;
};

export default CadastroFuncionariosEditHeaderTabs;
