import styled from "styled-components";
import { Flex } from "../Flex/Flex";

import React from "react";

export const GridStyle = styled(Flex)`
  flex-direction: column;
  padding: 24px 24px;
`;

const Grid = ({ children }) => {
  return <GridStyle>{children}</GridStyle>;
};

export default Grid;

Grid.defaultProps = {
  display: "flex",
};
