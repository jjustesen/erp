import styled from "styled-components";

import { Flex } from "../../elements/Flex/Flex";

export const TableHeaderCol = ({ children, ...props }) => {
  const TableHeaderColStyle = styled(Flex)`
    padding: 0px 20px;
    color: rgb(145, 156, 171);
    flex: 1;
  `;

  return (
    <>
      <TableHeaderColStyle alignItems="center" {...props}>
        {children}
      </TableHeaderColStyle>
    </>
  );
};
