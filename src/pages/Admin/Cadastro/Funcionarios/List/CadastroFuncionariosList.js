import CrudDrawerList from "../../../../../components/templates/CrudDrawerList/CrudDrawerList";
import React from "react";
import { useCrudDrawer } from "../../../../../components/templates/CrudDrawer/CrudDrawerContext";
import CadastroFuncionariosListCards from "./CadastroFuncionariosListCards";

const CadastroFuncionariosList = () => {
  const { crudDrawer } = useCrudDrawer();

  return (
    <CrudDrawerList
      title="Funcionarios"
      nameCreate="novo funcionario"
      path="/funcionarios"
      onCreate={crudDrawer.onCreate}
      onEdit={crudDrawer.onEdit}
      card={CadastroFuncionariosListCards}
    />
  );
};

export default CadastroFuncionariosList;
