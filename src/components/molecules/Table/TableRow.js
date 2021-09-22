import styled from "styled-components";

import { Flex } from "../../elements/Flex/Flex";

export const TableRow = ({ children, to, ...props }) => {
  const TableRowStyle = styled(Flex)`
    border-bottom: 1px solid rgb(198, 204, 215);
    font-size: 14px;
    padding: 20px 10px;
    padding-left: 30px;
    :hover {
      background-color: #ebebeb;
    }
    cursor: pointer;
  `;

  return (
    <>
      <TableRowStyle alignItems="center" {...props}>
        {children}
      </TableRowStyle>
    </>
  );
};
