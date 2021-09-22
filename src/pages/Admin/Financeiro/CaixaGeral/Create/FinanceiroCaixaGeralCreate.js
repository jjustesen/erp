import { Button, MenuItem } from "@material-ui/core";
import React, { useCallback } from "react";
import { Form, Formik } from "formik";
import { Field } from "../../../../../components/atoms/Field";
import { FieldSelect } from "../../../../../components/atoms/Field/FieldSelect";
import Row from "../../../../../components/elements/Grid/Row";
import { Col } from "../../../../../components/elements/Grid/Col";
import Grid from "../../../../../components/elements/Grid/Grid";
import FormTitle from "../../../../../components/molecules/FormTitle/FormTitle";
import {
  useQueryGetCaixaDiario,
  useQueryGetClientes,
  useQueryGetProdutos,
} from "api/queries/queries";
import { getSafe } from "helpers/getSafe";
import { mutationPostCaixaDiario } from "api/mutations/post";
import { useMutation, useQueryClient } from "react-query";

const FinanceiroCaixaGeralCreate = ({ onClose }) => {
  const queryClient = useQueryClient();

  const { data: dataCliente } = useQueryGetClientes();
  const { data: dataProduto } = useQueryGetProdutos();

  const { mutate } = useMutation((e) => mutationPostCaixaDiario(e), {
    onSuccess: () => {
      queryClient.invalidateQueries(useQueryGetCaixaDiario.queryKey);
      onClose();
    },
  });

  const onSubmit = useCallback(
    (values, formik) => {
      mutate(
        {
          nomeCliente: values.cliente,
          tipoConsumo: values.tipoConsumo,
          itemConsumido: values.itemConsumido.nome,
          preco: values.itemConsumido.preco,
        },
        {
          onSuccess: () => {
            formik.resetForm({});
          },
        }
      );
    },
    [mutate]
  );

  return (
    <div>
      <Formik initialValues={{}} onSubmit={onSubmit}>
        {({ isSubmitting, values }) => (
          <Form>
            <Grid>
              <FormTitle>Dados basicos</FormTitle>
              <Row>
                <Col width={1 / 2}>
                  <FieldSelect
                    margin="normal"
                    fullWidth
                    required
                    name="cliente"
                    label="Cliente"
                    variant="outlined"
                  >
                    {dataCliente.map((a) => (
                      <MenuItem value={a.nome}>{a.nome}</MenuItem>
                    ))}
                  </FieldSelect>
                </Col>
                <Col width={1 / 2}>
                  <Field
                    required
                    fullWidth
                    name="tipoConsumo"
                    label="Tipo de consumo"
                    variant="outlined"
                  />
                </Col>
              </Row>
              <Row>
                <Col flex={1}>
                  <FieldSelect
                    margin="normal"
                    fullWidth
                    required
                    name="itemConsumido"
                    label="Item"
                    variant="outlined"
                  >
                    {dataProduto.map((a) => (
                      <MenuItem value={a}>{a.nome}</MenuItem>
                    ))}
                  </FieldSelect>
                </Col>
                {console.log(values)}
                <Col flex={1}>
                  <Field
                    fullWidth
                    disabled
                    value={getSafe(values, "itemConsumido.preco", 0)}
                    name="preco"
                    label="Preço"
                    variant="outlined"
                  />
                </Col>
              </Row>

              <Row justifyContent="flex-end">
                <Col width="fit-content">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="large"
                    disabled={isSubmitting}
                  >
                    Cadastrar
                  </Button>
                </Col>
              </Row>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FinanceiroCaixaGeralCreate;
