import React from "react";

import { TableRow } from "components/molecules/Table/TableRow";
import { TableCol } from "components/molecules/Table/TableCol";
import { Flex } from "components/elements/Flex";
import { Text } from "components/elements/Text/Text";
import { useQueryGetCaixaDiario } from "api/queries/queries";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import { useMutation, useQueryClient } from "react-query";
import { mutationDeleteCaixaDiarioById } from "api/mutations/delete";
export const FinanceiroCaixaGeralListRow = () => {
  const { data } = useQueryGetCaixaDiario();
  const queryClient = useQueryClient();

  const { mutate: deleteCaixaDiario } = useMutation(
    (id) => mutationDeleteCaixaDiarioById({ id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(useQueryGetCaixaDiario.queryKey);
      },
    }
  );

  if (data.length === 0) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100px">
        <Text fontSize={20}>Nenhum item cadastrado</Text>
      </Flex>
    );
  }

  return (
    <>
      {data.map((lancamento) => {
        return (
          <TableRow>
            <TableCol>{lancamento.nomeCliente}</TableCol>
            <TableCol>{lancamento.tipoConsumo}</TableCol>
            <TableCol>{lancamento.itemConsumido}</TableCol>
            <TableCol>{lancamento.preco}</TableCol>
            <TableCol style={{ flex: "none" }} width="80px">
              <IconButton onClick={() => deleteCaixaDiario(lancamento.id)}>
                <DeleteIcon />
              </IconButton>
            </TableCol>
          </TableRow>
        );
      })}
    </>
  );
};

export default FinanceiroCaixaGeralListRow;
