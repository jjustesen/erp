import React from "react";

import caixaGeral from "../caixaGeral";
import { TableRow } from "components/molecules/Table/TableRow";
import { TableCol } from "components/molecules/Table/TableCol";
import { Flex } from "components/elements/Flex";
import { Text } from "components/elements/Text/Text";

export const FinanceiroCaixaGeralListRow = ({ onEdit, onCreate }) => {
  // () => onEdit(cliente.id)

  if (caixaGeral.length === 0) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100px">
        <Text fontSize={20}>Nenhum item cadastrado</Text>
      </Flex>
    );
  }

  return (
    <>
      {caixaGeral.map((cliente) => {
        return (
          <TableRow onClick={() => onEdit(cliente.id)}>
            <TableCol>{cliente.nome}</TableCol>
            <TableCol>{cliente.nome}</TableCol>
            <TableCol>{cliente.nome}</TableCol>
            <TableCol>{cliente.nome}</TableCol>
          </TableRow>
        );
      })}
    </>
  );
};

export default FinanceiroCaixaGeralListRow;
