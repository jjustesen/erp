import React, { useCallback, useMemo } from "react";

import { useField, useFormikContext } from "formik";
import styled from "styled-components";

import { TextField, Typography } from "@material-ui/core";

const StyleTextField = styled(TextField)`
  margin-bottom: 16px;
`;
export const Field = ({
  name,
  variant = "outlined",
  type = "text",
  ...props
}) => {
  const [{ value }, { error }, { setValue }] = useField(name);

  const { submitCount } = useFormikContext();

  const showError = useMemo(
    () => !!error && submitCount > 0,
    [submitCount, error]
  );

  const helperText = useMemo(() => {
    if (showError) {
      return <Typography variant="body2">{error}</Typography>;
    }

    return null;
  }, [showError, error]);

  const onChange = useCallback(
    (ev) => {
      setValue(ev.target.value);
    },
    [setValue]
  );

  return (
    <StyleTextField
      type={type}
      id={name}
      error={showError && error}
      helperText={helperText}
      name={name}
      onChange={onChange}
      variant={variant}
      value={value}
      novalidate
      {...props}
    />
  );
};
