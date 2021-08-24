import { Button, MenuItem } from "@material-ui/core";
import React, { useCallback, useMemo } from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { Field } from "../../../../../components/atoms/Field";
import { FieldSelect } from "../../../../../components/atoms/Field/FieldSelect";
import Row from "../../../../../components/elements/Grid/Row";
import { Col } from "../../../../../components/elements/Grid/Col";
import Grid from "../../../../../components/elements/Grid/Grid";
import FormTitle from "../../../../../components/molecules/FormTitle/FormTitle";
import TabHeader from "../../../../../components/molecules/TabHeader/TabHeader";
import CadastroClientesEditHeader from "./CadastroClientesEditHeader";
import { useParams } from "react-router-dom";
import { clientesById } from "../clientes";

const CadastroClientesEdit = () => {
  const validationSchema = yup.object({
    nome: yup
      .string()
      .required("geral:validacoes.obrigatorio")
      .required("valor is required"),
  });
  const { id } = useParams();

  const initialValues = useMemo(() => {
    return clientesById.find((cliente) => cliente.id === id);
  }, [id]);

  console.log(id);

  // const { mutate } = useMutation((e) => mutationPostDivida(e), {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('getDividas')
  //     createSnackbar('success', t('registeredDebt'))
  //   }
  // })

  const onSubmit = useCallback((values, formik) => {
    console.log(values);
  }, []);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <Grid>
              <CadastroClientesEditHeader tabs={TabHeader} />

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
              <Row justifyContent="flex-end">
                <Col width="fit-content">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="large"
                    disabled={isSubmitting}
                  >
                    Criar
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

export default CadastroClientesEdit;
