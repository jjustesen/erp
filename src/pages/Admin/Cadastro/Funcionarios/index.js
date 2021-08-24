import React from "react";
import CrudDrawer from "../../../../components/templates/CrudDrawer/CrudDrawer";
import CadastroFuncionariosCreate from "./Create/CadastroFuncionariosCreate";
import CadastroFuncionariosEdit from "./Edit/CadastroFuncionariosEdit";
import CadastroFuncionariosList from "./List";

const CadastroFuncionarios = () => {
  return (
    <CrudDrawer
      path="/funcionarios"
      id=":id"
      create={CadastroFuncionariosCreate}
      edit={CadastroFuncionariosEdit}
      list={CadastroFuncionariosList}
    />
  );
};

export default CadastroFuncionarios;
