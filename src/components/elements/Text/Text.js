import PropTypes from "prop-types";

import styled, { css } from "styled-components";
import {
  space,
  color,
  fontFamily,
  fontWeight,
  textAlign,
  letterSpacing,
  lineHeight,
  fontSize,
} from "styled-system";

export const TextVariants = {
  default: css`
    line-height: ${(props) =>
      props.theme.fontSizes.medium + props.theme.lineHeightScale}px;
  `,

  label: css`
    line-height: ${(props) =>
      props.theme.fontSizes.small + props.theme.lineHeightScale}px;
  `,
};

export const Text = styled.span`
  ${fontSize};
  ${space};
  ${color};
  ${fontFamily};
  ${fontWeight};
  ${textAlign};
  ${letterSpacing};
  ${lineHeight};
`;

Text.displayName = "Text";

Text.propTypes = {
  truncate: PropTypes.bool,
  variant: PropTypes.oneOf(Object.keys(TextVariants)),
};

Text.defaultProps = {
  variant: "default",
  fontFamily: "default",
};
