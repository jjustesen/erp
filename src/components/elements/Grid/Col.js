import styled from "styled-components";
import { Box } from "../Box/Box";

export const Col = styled(Box)``;

Col.displayName = "Col";

Col.propTypes = {
  ...Box.propTypes,
};

Col.defaultProps = {
  px: "8px",
  my: "8px",
  width: 1,
};
