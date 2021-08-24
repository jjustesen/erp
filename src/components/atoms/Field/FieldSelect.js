import React, { useCallback, useMemo } from "react";

import { useField, useFormikContext } from "formik";
import styled from "styled-components";

import { FormControl, InputLabel, Select, Typography } from "@material-ui/core";

const StyleFieldSelect = styled(Select)`
  margin-bottom: 16px;
`;

export const FieldSelect = ({
  margin = "normal",
  name,
  label,
  variant = "outlined",
  type = "text",
  children,
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
    <FormControl {...props}>
      <InputLabel style={{ paddingLeft: "14px", marginTop: "-4px" }}>
        {label}
      </InputLabel>
      <StyleFieldSelect
        {...props}
        type={type}
        id={name}
        error={showError && error}
        helperText={helperText}
        name={name}
        onChange={onChange}
        variant={variant}
        label={label}
        value={value}
        novalidate
      >
        {children}
      </StyleFieldSelect>
    </FormControl>
  );
};
