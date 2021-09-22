import React from "react";
import CrudHeader from "../../../../../components/molecules/CrudHeader/CrudHeader";
import CadastroFuncionariosEditHeaderTabs from "./CadastroFuncionariosEditHeaderTabs";

const CadastroFuncionariosEditHeader = ({ user }) => {
  return (
    <CrudHeader
      nome={user.nome}
      chip={[]}
      tabs={CadastroFuncionariosEditHeaderTabs}
    ></CrudHeader>
  );
};

export default CadastroFuncionariosEditHeader;
