import styled from "styled-components";

import { Flex } from "../../elements/Flex/Flex";

export const TableCol = ({ children, ...props }) => {
  const TableCol = styled(Flex)`
    flex: 1;
    padding: 0px 20px;
    color: rgb(70, 80, 90);
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  `;

  return (
    <>
      <TableCol alignItems="center" {...props}>
        {children}
      </TableCol>
    </>
  );
};
