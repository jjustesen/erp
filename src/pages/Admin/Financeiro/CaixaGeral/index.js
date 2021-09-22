import CrudDrawer from "components/templates/CrudDrawer/CrudDrawer";
import React from "react";
import FinanceiroCaixaGeralCreate from "./Create/FinanceiroCaixaGeralCreate";
import FinanceiroCaixaGeralEdit from "./Edit/FinanceiroCaixaGeralEdit";
import FinanceiroCaixaGeralList from "./List/FinanceiroCaixaGeralList";

const FinanceiroCaixaGeral = () => {
  return (
    <CrudDrawer
      path="/caixa-geral"
      id=":id"
      create={FinanceiroCaixaGeralCreate}
      edit={FinanceiroCaixaGeralEdit}
      list={FinanceiroCaixaGeralList}
    />
  );
};

export default FinanceiroCaixaGeral;
