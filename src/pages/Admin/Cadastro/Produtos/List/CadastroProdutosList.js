import React from "react";
import CadastroProdutosListCards from "./CadastroProdutosListCards";
import { useCrudDrawer } from "components/templates/CrudDrawer/CrudDrawerContext";
import CrudDrawerList from "components/templates/CrudDrawerList/CrudDrawerList";

const CadastroProdutosList = () => {
  const { crudDrawer } = useCrudDrawer();

  return (
    <CrudDrawerList
      title="Produtos"
      nameCreate="novo produto"
      path="/produtos"
      onCreate={crudDrawer.onCreate}
      onEdit={crudDrawer.onEdit}
      card={CadastroProdutosListCards}
    />
  );
};

export default CadastroProdutosList;
