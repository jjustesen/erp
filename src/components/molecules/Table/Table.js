import { Box } from "components/elements/Box";
import styled from "styled-components";

export const Table = ({ children, ...props }) => {
  const Table = styled(Box)`
    margin: 20px;
    border: 1px solid rgb(198, 204, 215, 0.5);
    box-shadow: 0px 0.1px 0.3px rgba(0, 0, 0, 0.1),
      0px 1px 2px rgba(0, 0, 0, 0.2);

    border-radius: 4px;
  `;

  return (
    <>
      <Table alignItems="center" {...props}>
        {children}
      </Table>
    </>
  );
};
