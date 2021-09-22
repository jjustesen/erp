import CrudDrawerList from "components/templates/CrudDrawerList/CrudDrawerList";
import React from "react";
import { useCrudDrawer } from "components/templates/CrudDrawer/CrudDrawerContext";
import { FinanceiroCaixaGeralListRow } from "./FinanceiroCaixaGeralListRow";
import FinanceiroCaixaGeralListHeader from "./FinanceiroCaixaGeralListHeader";

const FinanceiroCaixaGeralList = () => {
  const { crudDrawer } = useCrudDrawer();

  return (
    <CrudDrawerList
      title="Caixa geral"
      nameCreate="nova lançamento"
      path="/caixa-geral"
      onCreate={crudDrawer.onCreate}
      onEdit={crudDrawer.onEdit}
      header={FinanceiroCaixaGeralListHeader}
      row={FinanceiroCaixaGeralListRow}
    />
  );
};

export default FinanceiroCaixaGeralList;
