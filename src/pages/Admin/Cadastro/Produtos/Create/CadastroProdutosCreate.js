import { Button, MenuItem } from "@material-ui/core";
import React, { useCallback } from "react";
import { Form, Formik } from "formik";
import { Field } from "../../../../../components/atoms/Field";
import { FieldSelect } from "../../../../../components/atoms/Field/FieldSelect";
import Row from "../../../../../components/elements/Grid/Row";
import { Col } from "../../../../../components/elements/Grid/Col";
import Grid from "../../../../../components/elements/Grid/Grid";
import FormTitle from "../../../../../components/molecules/FormTitle/FormTitle";
import { useMutation, useQueryClient } from "react-query";
import { useQueryGetProdutos } from "api/queries/queries";
import { mutationPostProdutos } from "api/mutations/post";

const CadastroProdutosCreate = ({ onClose }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation((e) => mutationPostProdutos(e), {
    onSuccess: () => {
      queryClient.invalidateQueries(useQueryGetProdutos.queryKey);
      onClose();
    },
  });

  const onSubmit = useCallback(
    (values, formik) => {
      mutate(
        {
          nome: values.nome,
          codigo: values.codigo,
          ncm: values.ncm,
          categoria: values.categoria,
          finalidade: values.finalidade,
          tipoProduto: values.tipoProduto,
          preco: values.preco,
          descricao: values.descricao,
          tipoEmbalagem: values.tipoEmbalagem,
          quantidade: values.quantidade,
          padrao: values.padrao,
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
        {({ isSubmitting }) => (
          <Form>
            <Grid>
              <FormTitle>Dados basicos</FormTitle>
              <Row>
                <Col width={1 / 4}>
                  <Field
                    fullWidth
                    name="codigo"
                    label="Código"
                    variant="outlined"
                  />
                </Col>
                <Col width={3 / 4}>
                  <Field
                    fullWidth
                    required
                    name="nome"
                    label="Nome do produto"
                    variant="outlined"
                  />
                </Col>
              </Row>
              <Row>
                <Col width={1}>
                  <Field fullWidth name="ncm" label="NCM" variant="outlined" />
                </Col>
                <Col width={1}>
                  <FieldSelect
                    fullWidth
                    name="categoria"
                    label="Categoria"
                    variant="outlined"
                  >
                    <MenuItem value="BEBIDAS">Bebidas</MenuItem>
                    <MenuItem value="COMIDAS">Comidas</MenuItem>
                  </FieldSelect>
                </Col>
                <Col width={1}>
                  <Field
                    fullWidth
                    name="finalidade"
                    label="Finalidade"
                    variant="outlined"
                  />
                </Col>
              </Row>
              <Row>
                <Col width={1 / 2}>
                  <Field
                    fullWidth
                    name="tipoProduto"
                    label="Tipo de produto"
                    variant="outlined"
                  />
                </Col>
                <Col width={1 / 2}>
                  <Field
                    fullWidth
                    required
                    name="preco"
                    label="Preço"
                    variant="outlined"
                  />
                </Col>
              </Row>
              <Row>
                <Col width={1}>
                  <Field
                    fullWidth
                    name="descricao"
                    label="Descrição"
                    variant="outlined"
                  />
                </Col>
              </Row>
              <FormTitle>Embalagem</FormTitle>
              <Row>
                <Col flex={1}>
                  <Field
                    fullWidth
                    name="tipoEmbalagem"
                    label="Tipo de embalagem"
                    variant="outlined"
                  />
                </Col>
                <Col flex={1}>
                  <Field
                    fullWidth
                    name="quantidade"
                    label="Quantidade"
                    variant="outlined"
                  />
                </Col>
              </Row>
              <Row>
                <Col width={1}>
                  <Field
                    fullWidth
                    name="padrao"
                    label="Padrao"
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

export default CadastroProdutosCreate;
