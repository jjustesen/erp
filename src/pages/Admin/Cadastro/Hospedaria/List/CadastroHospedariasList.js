import CrudDrawerList from "../../../../../components/templates/CrudDrawerList/CrudDrawerList";
import React from "react";
import { useCrudDrawer } from "../../../../../components/templates/CrudDrawer/CrudDrawerContext";
import CadastroHospedariasListCards from "./CadastroHospedariasListCards";

const CadastroHospedariasList = () => {
  const { crudDrawer } = useCrudDrawer();

  return (
    <CrudDrawerList
      title="Hospedarias"
      nameCreate="nova hospedaria"
      path="/hospedarias"
      onCreate={crudDrawer.onCreate}
      onEdit={crudDrawer.onEdit}
      card={CadastroHospedariasListCards}
    />
  );
};

export default CadastroHospedariasList;
