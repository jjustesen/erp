import { Button, MenuItem } from "@material-ui/core";
import React, { useCallback } from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { Field } from "../../../../../components/atoms/Field";
import { FieldSelect } from "../../../../../components/atoms/Field/FieldSelect";
import Row from "../../../../../components/elements/Grid/Row";
import { Col } from "../../../../../components/elements/Grid/Col";
import Grid from "../../../../../components/elements/Grid/Grid";
import FormTitle from "../../../../../components/molecules/FormTitle/FormTitle";
import TabHeader from "../../../../../components/molecules/TabHeader/TabHeader";
import CadastroFuncionariosEditHeader from "./CadastroFuncionariosEditHeader";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import {
  useQueryGetFuncionarios,
  useQueryGetFuncionariosById,
} from "api/queries/queries";
import { mutationPutFuncionariosById } from "api/mutations/put";
import { mutationDeleteFuncionariosById } from "api/mutations/delete";

const CadastroFuncionariosEdit = ({ onClose }) => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data } = useQueryGetFuncionariosById({ id });
  const validationSchema = yup.object({
    nome: yup
      .string()
      .required("geral:validacoes.obrigatorio")
      .required("valor is required"),
  });

  console.log(id);

  const { mutate } = useMutation(
    (e) => mutationPutFuncionariosById({ id }, e),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(useQueryGetFuncionarios.queryKey);
        queryClient.invalidateQueries(useQueryGetFuncionariosById.queryKey);

        onClose();
      },
    }
  );
  const { mutate: deleteCliente } = useMutation(
    () => mutationDeleteFuncionariosById({ id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(useQueryGetFuncionarios.queryKey);
        onClose();
      },
    }
  );

  const onSubmit = useCallback(
    (values, formik) => {
      mutate(
        {
          nome: values.nome,
          tipoPessoa: values.tipoPessoa,
          cpf: values.cpf,
          cnpj: values.cnpj,
          dataNascimento: values.dataNacimento,
          nomeSocial: values.nomeSocial,
          celular: values.celular,
          telefone: values.telefone,
          email: values.email,
          usarNomeSocial: false,
          cargo: values.cargo,
          funcao: values.funcao,
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
      <Formik
        initialValues={data}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <Grid>
              <CadastroFuncionariosEditHeader user={data} tabs={TabHeader} />

              <FormTitle>Dados basicos</FormTitle>

              <Row>
                <Col width={1 / 3}>
                  <FieldSelect
                    margin="normal"
                    fullWidth
                    required
                    name="tipoPessoa"
                    label="pessoa"
                    variant="outlined"
                  >
                    <MenuItem value="FISICA">Fisica</MenuItem>
                    <MenuItem value="JURIDICA">Juridica</MenuItem>
                  </FieldSelect>
                </Col>
                <Col width={2 / 3}>
                  <Field
                    fullWidth
                    required
                    name="nome"
                    label="Nome completo"
                    variant="outlined"
                  />
                </Col>
              </Row>
              <Row>
                <Col flex={1}>
                  <Field
                    fullWidth
                    name="cpf"
                    label="CPF"
                    variant="outlined"
                    disabled={values?.tipoPessoa === "JURIDICA"}
                  />
                </Col>

                <Col flex={1}>
                  <Field
                    fullWidth
                    name="cnpj"
                    label="CNPJ"
                    variant="outlined"
                    disabled={values?.tipoPessoa === "FISICA"}
                  />
                </Col>
                <Col flex={1}>
                  <Field
                    fullWidth
                    name="dataNascimento"
                    label="Data de nascimento"
                    variant="outlined"
                  />
                </Col>
              </Row>
              <Row>
                <Col width={1}>
                  <Field
                    fullWidth
                    name="nomeSocial"
                    label="Nome social"
                    variant="outlined"
                  />
                </Col>
              </Row>
              <FormTitle>Contato</FormTitle>
              <Row>
                <Col flex={1}>
                  <Field
                    fullWidth
                    name="celular"
                    label="Celular"
                    variant="outlined"
                  />
                </Col>
                <Col flex={1}>
                  <Field
                    fullWidth
                    name="telefone"
                    label="Telefone"
                    variant="outlined"
                  />
                </Col>
              </Row>
              <Row>
                <Col width={1}>
                  <Field
                    fullWidth
                    name="email"
                    label="E-mail"
                    variant="outlined"
                  />
                </Col>
              </Row>

              <FormTitle>Função</FormTitle>

              <Row>
                <Col flex={1}>
                  <Field
                    fullWidth
                    name="funcao"
                    label="Função"
                    variant="outlined"
                  />
                </Col>
                <Col flex={1}>
                  <Field
                    fullWidth
                    name="cargo"
                    label="Cargo"
                    variant="outlined"
                  />
                </Col>
              </Row>

              <Row justifyContent="flex-end">
                <Col width="fit-content">
                  <Button
                    variant="outlined"
                    onClick={() => deleteCliente()}
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

export default CadastroFuncionariosEdit;
