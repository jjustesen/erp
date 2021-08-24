import React from "react";
import styled from "styled-components";
import { Flex } from "../../elements/Flex/Flex";

const StyleFormTitle = styled(Flex)`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;

  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 22px;
  padding-bottom: 14px;
  padding-top: 14px;

  border-bottom: 1px solid #c4c4c4;
`;
const FormTitle = ({ children }) => {
  return <StyleFormTitle>{children}</StyleFormTitle>;
};

export default FormTitle;
