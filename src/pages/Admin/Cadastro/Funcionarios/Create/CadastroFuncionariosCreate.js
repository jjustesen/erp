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

const CadastroFuncionariosCreate = () => {
  const validationSchema = yup.object({
    nome: yup
      .string()
      .required("geral:validacoes.obrigatorio")
      .required("valor is required"),
  });

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
        initialValues={{}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid>
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
                  <Field fullWidth name="cpf" label="CPF" variant="outlined" />
                </Col>

                <Col flex={1}>
                  <Field
                    fullWidth
                    name="cnpj"
                    label="CNPJ"
                    variant="outlined"
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

export default CadastroFuncionariosCreate;
