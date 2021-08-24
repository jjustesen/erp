import React from "react";
import CrudDrawer from "../../../../components/templates/CrudDrawer/CrudDrawer";
import CadastroClientesCreate from "./Create/CadastroClientesCreate";
import CadastroClientesEdit from "./Edit/CadastroClientesEdit";
import CadastroClientesList from "./List";

const CadastroClientes = () => {
  return (
    <CrudDrawer
      path="/clientes"
      id=":id"
      create={CadastroClientesCreate}
      edit={CadastroClientesEdit}
      list={CadastroClientesList}
    />
  );
};

export default CadastroClientes;
