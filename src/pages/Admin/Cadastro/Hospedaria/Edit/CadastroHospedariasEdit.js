import { Button, MenuItem } from "@material-ui/core";
import React, { useCallback } from "react";
import { Form, Formik } from "formik";
import { Field } from "../../../../../components/atoms/Field";
import { FieldSelect } from "../../../../../components/atoms/Field/FieldSelect";
import Row from "../../../../../components/elements/Grid/Row";
import { Col } from "../../../../../components/elements/Grid/Col";
import Grid from "../../../../../components/elements/Grid/Grid";
import FormTitle from "../../../../../components/molecules/FormTitle/FormTitle";
import TabHeader from "../../../../../components/molecules/TabHeader/TabHeader";
import CadastroHospedariasEditHeader from "./CadastroHospedariasEditHeader";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import {
  useQueryGetHospedarias,
  useQueryGetHospedariasById,
} from "api/queries/queries";
import { mutationPutHospedarioasById } from "api/mutations/put";
import { mutationDeleteHospedariasById } from "api/mutations/delete";

const CadastroHospedariasEdit = ({ onClose }) => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data } = useQueryGetHospedariasById({ id });

  const { mutate } = useMutation(
    (e) => mutationPutHospedarioasById({ id }, e),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(useQueryGetHospedarias.queryKey);
        queryClient.invalidateQueries(useQueryGetHospedariasById.queryKey);

        onClose();
      },
    }
  );
  const { mutate: deleteHospedaria } = useMutation(
    () => mutationDeleteHospedariasById({ id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(useQueryGetHospedarias.queryKey);
        onClose();
      },
    }
  );

  const onSubmit = useCallback(
    (values, formik) => {
      mutate(
        {
          nome: values.nome,
          numeroQuarto: values.numeroQuarto,
          andar: values.andar,
          bloco: values.bloco,
          numeroCamas: values.numeroCamas,
          quantidadeHospedes: values.quantidadeHospedes,
          preco: values.preco,
          disponivel: values.disponivel,
          ativo: values.ativo,
          quantidade: values.quantidade,
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
      <Formik initialValues={data} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Grid>
              <CadastroHospedariasEditHeader user={data} tabs={TabHeader} />

              <FormTitle>Dados basicos</FormTitle>
              <Row>
                <Col width={1}>
                  <Field
                    fullWidth
                    required
                    name="nome"
                    label="Nome"
                    variant="outlined"
                  />
                </Col>
              </Row>
              <Row>
                <Col width={1 / 3}>
                  <Field
                    fullWidth
                    required
                    name="numeroQuarto"
                    label="Numero do quarto"
                    variant="outlined"
                  />
                </Col>
                <Col width={1 / 3}>
                  <Field
                    fullWidth
                    name="andar"
                    label="Andar"
                    variant="outlined"
                  />
                </Col>
                <Col width={1 / 3}>
                  <Field
                    fullWidth
                    name="bloco"
                    label="Bloco"
                    variant="outlined"
                  />
                </Col>
              </Row>
              <Row>
                <Col width={1 / 3}>
                  <Field
                    fullWidth
                    type="number"
                    name="numeroCamas"
                    label="Numero de camas"
                    variant="outlined"
                  />
                </Col>
                <Col width={1 / 3}>
                  <Field
                    fullWidth
                    type="number"
                    name="quantidadeHospedes"
                    label="Quantidade de hospedes"
                    variant="outlined"
                  />
                </Col>
                <Col width={1 / 3}>
                  <Field
                    fullWidth
                    name="preco"
                    label="Preço"
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
                    name="disponivel"
                    label="Disponibilidade"
                    variant="outlined"
                  >
                    <MenuItem value={true}>Disponivel</MenuItem>
                    <MenuItem value={false}>Indisponivel</MenuItem>
                  </FieldSelect>
                </Col>
                <Col flex={1}>
                  <FieldSelect
                    margin="normal"
                    fullWidth
                    required
                    name="ativo"
                    label="Status"
                    variant="outlined"
                  >
                    <MenuItem value={true}>Ativo</MenuItem>
                    <MenuItem value={false}>Inativo</MenuItem>
                  </FieldSelect>
                </Col>
                <Col width={1}>
                  <Field
                    type="number"
                    fullWidth
                    name="quantidade"
                    label="Quantidade"
                    variant="outlined"
                  />
                </Col>
              </Row>
              <Row justifyContent="flex-end">
                <Col width="fit-content">
                  <Button
                    onClick={() => deleteHospedaria()}
                    variant="outlined"
                    type="submit"
                    size="large"
                    disabled={isSubmitting}
                  >
                    deletar
                  </Button>
                </Col>
                <Col width="fit-content">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="large"
                    disabled={isSubmitting}
                  >
                    Salvar
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

export default CadastroHospedariasEdit;
