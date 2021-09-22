import styled from "styled-components";
import { Flex } from "../Flex/Flex";

import React from "react";

export const RowStyle = styled(Flex)`
  flex: 1;
  padding-left: 8px;
  padding-right: 8px;
`;

const Row = ({ children, ...props }) => {
  return <RowStyle {...props}>{children}</RowStyle>;
};

export default Row;

Flex.defaultProps = {
  display: "flex",
};
