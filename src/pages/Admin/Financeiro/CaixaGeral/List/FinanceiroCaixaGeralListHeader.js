import { TableHeaderCol } from "components/molecules/Table/TableHeaderCol";
import { TableHeader } from "components/molecules/Table/TableHeader";
import React from "react";

const FinanceiroCaixaGeralListHeader = () => {
  return (
    <TableHeader>
      <TableHeaderCol>Cliente</TableHeaderCol>
      <TableHeaderCol>Tipo de Consumo</TableHeaderCol>
      <TableHeaderCol>Item</TableHeaderCol>
      <TableHeaderCol>Preço</TableHeaderCol>
      <TableHeaderCol style={{ flex: "none" }} width="80px"></TableHeaderCol>
    </TableHeader>
  );
};

export default FinanceiroCaixaGeralListHeader;
