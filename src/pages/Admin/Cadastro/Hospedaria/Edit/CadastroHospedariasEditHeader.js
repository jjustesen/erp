import React from "react";
import CrudHeader from "../../../../../components/molecules/CrudHeader/CrudHeader";
import CadastroHospedariasEditHeaderTabs from "./CadastroHospedariasEditHeaderTabs";

const CadastroHospedariasEditHeader = ({ user }) => {
  return (
    <CrudHeader
      nome={user.nome}
      chip={[]}
      tabs={CadastroHospedariasEditHeaderTabs}
    ></CrudHeader>
  );
};

export default CadastroHospedariasEditHeader;
