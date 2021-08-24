import React from "react";
import CrudDrawer from "../../../../components/templates/CrudDrawer/CrudDrawer";
import CadastroFuncionariosEditEnderecosCreate from "./Create/CadastroFuncionariosEditEnderecosCreate";
import CadastroFuncionariosEditEnderecosEdit from "./Edit/CadastroFuncionariosEditEnderecosEdit";
import CadastroFuncionariosEditEnderecosList from "./List";

const CadastroFuncionariosEditEnderecos = () => {
  return (
    <CrudDrawer
      path="/funcionarios"
      id=":id"
      create={CadastroFuncionariosEditEnderecosCreate}
      edit={CadastroFuncionariosEditEnderecosEdit}
      list={CadastroFuncionariosEditEnderecosList}
    />
  );
};

export default CadastroFuncionariosEditEnderecos;
