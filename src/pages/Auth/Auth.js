import React, { useCallback, useContext, useMemo } from "react";

import { useTranslation } from "react-i18next";

import { Form, Formik } from "formik";
import * as yup from "yup";

import { Button } from "@material-ui/core";

import { Field } from "../../components/atoms/Field";

import { styles } from "./styles";

import { AuthContext } from "../../providers/auth";

import { Flex } from "../../components/elements/Flex/Flex";
import { Text } from "../../components/elements/Text/Text";

export default function Auth() {
  const { login } = useContext(AuthContext);

  const { t } = useTranslation();

  const classes = styles();

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      email: yup.string().email(t("emailInvalid")).required(t("requiredEmail")),
      password: yup.string().required(t("requiredPassword")),
    });
  }, [t]);

  const onSubmit = useCallback(
    (values, formik) => {
      login(values).catch((e) => {
        formik.setFieldError("email", e.message);
        formik.setSubmitting(false);
      });
    },
    [login]
  );

  return (
    <>
      <Flex>
        <Flex flexDirection="column" width={700} p={64} justifyContent="center">
          <Flex width="220px" pb={64}>
            <Text fontSize={36}>Acesse sua conta</Text>
          </Flex>

          <Formik
            initialValues={{}}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <Form noValidate>
                <Flex flexDirection="column" mb={48}>
                  <Field
                    required
                    fullWidth
                    label={t("email")}
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <Field
                    required
                    fullWidth
                    name="password"
                    label={t("password")}
                    type="password"
                    autoComplete="current-password"
                  />
                </Flex>

                {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label={t("rememberMe")}
                /> */}
                <Flex justifyContent="space-between">
                  <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    className={classes.submit}
                  >
                    entrar
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    size="large"
                    color="primary"
                    disabled={isSubmitting}
                    className={classes.submit}
                  >
                    Registrar
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Flex>{" "}
        <Flex backgroundColor="#007E85" width={1} height="100vh" />
      </Flex>
    </>
  );
}
