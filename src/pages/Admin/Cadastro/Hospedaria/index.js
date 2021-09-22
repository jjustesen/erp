import React from "react";
import CrudDrawer from "../../../../components/templates/CrudDrawer/CrudDrawer";
import CadastroHospedariasCreate from "./Create/CadastroHospedariasCreate";
import CadastroHospedariasEdit from "./Edit/CadastroHospedariasEdit";
import CadastroHospedariasList from "./List";

const CadastroHospedarias = () => {
  return (
    <CrudDrawer
      path="/hospedarias"
      id=":id"
      create={CadastroHospedariasCreate}
      edit={CadastroHospedariasEdit}
      list={CadastroHospedariasList}
    />
  );
};

export default CadastroHospedarias;
