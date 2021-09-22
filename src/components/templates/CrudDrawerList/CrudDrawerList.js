import { Button, Divider, Paper } from "@material-ui/core";
import { Table } from "components/molecules/Table/Table";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Box } from "../../elements/Box/Box";
import { Flex } from "../../elements/Flex/Flex";
import { Text } from "../../elements/Text/Text";

const CrudDrawerList = ({
  title,
  nameCreate,
  onEdit,
  onCreate,
  header: Header,
  row: Row,
  card: Card,
  path,
  ...props
}) => {
  const history = useHistory();

  const handleEdit = useCallback(
    (id) => {
      history.push(`${path}/${id}`);
      onEdit();
    },
    [history, onEdit, path]
  );

  const handleCreate = useCallback(() => {
    history.push(`${path}/novo`);
    onCreate();
  }, [history, onCreate, path]);

  return (
    <>
      <Box p={16} height=" calc(100vh - 64px);">
        <Paper elevation={3} style={{ height: "100%" }}>
          <Flex
            py={24}
            px={64}
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize="20px">{title}</Text>
            <Flex>
              {onCreate && (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleCreate}
                >
                  {nameCreate}
                </Button>
              )}
            </Flex>
          </Flex>
          <Divider />

          {Header && Row && (
            <Table>
              <Header />
              <Row onEdit={handleEdit} {...props} />
            </Table>
          )}

          {Card && (
            <Flex p={32}>
              <Card onEdit={handleEdit} {...props} />
            </Flex>
          )}
        </Paper>
      </Box>
    </>
  );
};

export default CrudDrawerList;
