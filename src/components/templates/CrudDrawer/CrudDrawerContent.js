import { Dialog } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useDisclosure } from "../../../hooks/useDisclosure";

import { useCrudDrawer } from "./CrudDrawerContext";

const CrudDrawerContent = ({
  edit: Edit,
  create: Create,
  list: List,
  title,
  path,
  id,
  cadastro = "criar",
}) => {
  const CreateDrawer = useDisclosure();
  const EditDrawer = useDisclosure();
  const history = useHistory();

  const handleClickCreate = () => {
    CreateDrawer.onOpen({
      onCancel: () => {
        CreateDrawer.onClose();
      },
    });
  };
  const handleClickEdit = (id) => {
    EditDrawer.onOpen({
      id,
      onCancel: () => {
        EditDrawer.onClose();
      },
    });
  };

  const handleClose = useCallback(() => {
    history.push(`${path}`);
  }, [history, path]);

  const { setCrudDrawer } = useCrudDrawer();
  useEffect(() => {
    setCrudDrawer({ onEdit: handleClickEdit, onCreate: handleClickCreate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {Create && (
        <>
          {List && <List />}

          {CreateDrawer.isOpen && (
            <Route path={`${path}/novo`}>
              <Dialog
                anchor={"right"}
                open={CreateDrawer.isOpen}
                onClose={handleClose}
                maxWidth="lg"
                fullWidth
              >
                <Create
                  opened={CreateDrawer.isOpen}
                  onClose={CreateDrawer.onClose}
                  id={CreateDrawer.id}
                ></Create>
              </Dialog>
            </Route>
          )}
          {EditDrawer.isOpen && (
            <Route path={`${path}/${id}`}>
              <Dialog
                anchor={"right"}
                open={EditDrawer.isOpen}
                onClose={handleClose}
                maxWidth="lg"
                fullWidth
              >
                <Edit
                  opened={EditDrawer.isOpen}
                  onClose={EditDrawer.onClose}
                  id={EditDrawer.id}
                ></Edit>
              </Dialog>
            </Route>
          )}
        </>
      )}
    </>
  );
};

export default CrudDrawerContent;
