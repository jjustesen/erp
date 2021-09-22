import React from "react";
import CrudHeader from "../../../../../components/molecules/CrudHeader/CrudHeader";
import CadastroClientesEditHeaderTabs from "./CadastroClientesEditHeaderTabs";

const CadastroClientesEditHeader = ({ user }) => {
  return (
    <CrudHeader
      nome={user.nome}
      chip={[]}
      tabs={CadastroClientesEditHeaderTabs}
    ></CrudHeader>
  );
};

export default CadastroClientesEditHeader;
