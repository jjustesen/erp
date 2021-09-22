import styled from "styled-components";

import { Flex } from "../../elements/Flex/Flex";

export const TableHeader = ({ children }) => {
  const TableHeaderBox = styled(Flex)`
    border-bottom: 1px solid rgb(198, 204, 215);

    font-size: 12px;
    padding: 10px;
    padding-left: 30px;
    /* background-color: #e7eeef; */
    box-shadow: 0px 0.1px 0.3px rgba(0, 0, 0, 0.1),
      0px 1px 2px rgba(0, 0, 0, 0.2);
  `;

  return (
    <>
      <TableHeaderBox alignItems="center">{children}</TableHeaderBox>
    </>
  );
};
