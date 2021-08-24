import React from "react";
import CrudDrawer from "../../../../components/templates/CrudDrawer/CrudDrawer";
import CadastroClientesEditEnderecosCreate from "./Create/CadastroClientesEditEnderecosCreate";
import CadastroClientesEditEnderecosEdit from "./Edit/CadastroClientesEditEnderecosEdit";
import CadastroClientesEditEnderecosList from "./List";

const CadastroClientesEditEnderecos = () => {
  return (
    <CrudDrawer
      path="/clientes/:id/dados-basicos/enderecos"
      id=":id"
      create={CadastroClientesEditEnderecosCreate}
      edit={CadastroClientesEditEnderecosEdit}
      list={CadastroClientesEditEnderecosList}
    />
  );
};

export default CadastroClientesEditEnderecos;
