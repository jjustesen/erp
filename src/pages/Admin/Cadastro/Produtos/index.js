import React from "react";
import CrudDrawer from "../../../../components/templates/CrudDrawer/CrudDrawer";
import CadastroProdutosCreate from "./Create/CadastroProdutosCreate";
import CadastroProdutosEdit from "./Edit/CadastroProdutosEdit";
import CadastroProdutosList from "./List";

const CadastroProdutos = () => {
  return (
    <CrudDrawer
      path="/produtos"
      id=":id"
      create={CadastroProdutosCreate}
      edit={CadastroProdutosEdit}
      list={CadastroProdutosList}
    />
  );
};

export default CadastroProdutos;
