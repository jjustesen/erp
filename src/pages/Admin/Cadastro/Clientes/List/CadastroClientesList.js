import CrudDrawerList from "../../../../../components/templates/CrudDrawerList/CrudDrawerList";
import React from "react";
import { useCrudDrawer } from "../../../../../components/templates/CrudDrawer/CrudDrawerContext";
import CadastroClientesListCards from "./CadastroClientesListCards";

const CadastroClientesList = () => {
  const { crudDrawer } = useCrudDrawer();

  return (
    <CrudDrawerList
      title="Clientes"
      nameCreate="novo cliente"
      path="/clientes"
      onCreate={crudDrawer.onCreate}
      onEdit={crudDrawer.onEdit}
      card={CadastroClientesListCards}
    />
  );
};

export default CadastroClientesList;
