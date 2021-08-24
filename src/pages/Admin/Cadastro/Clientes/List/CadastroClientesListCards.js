import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import { Avatar, CardHeader, Chip, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Flex } from "../../../../../components/elements/Flex/Flex";
import { Text } from "../../../../../components/elements/Text/Text";
import { Box } from "../../../../../components/elements/Box/Box";
import clientes from "../clientes";

export const CadastroClientesListCards = ({ onEdit, onCreate }) => {
  return (
    <Flex width={1} flexWrap="wrap">
      {clientes.map((cliente) => {
        return (
          <Box width={1 / 4} p={10}>
            <Card>
              <CardActionArea onClick={() => onEdit(cliente.id)}>
                <Flex backgroundColor="#DCDCDC">
                  <CardHeader
                    style={{ width: "100%" }}
                    avatar={<Avatar aria-label="recipe">M</Avatar>}
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={cliente.nome}
                    subheader={cliente.cargo}
                  />
                </Flex>
                <Flex pb={10} flexDirection="column">
                  <CardContent>
                    <Flex mb={18}>
                      <Flex flex={1}>
                        <Text>E-mail</Text>
                      </Flex>
                      <Flex flex={1}>
                        <Text>Telefone</Text>
                      </Flex>
                    </Flex>
                    <Flex>
                      <Flex flex={1}>
                        <Text>{cliente.email}</Text>
                      </Flex>
                      <Flex flex={1}>
                        <Text>{cliente.telefone}</Text>
                      </Flex>
                    </Flex>
                  </CardContent>

                  <CardActions>
                    {cliente.chip.map((tabs) => {
                      return <Chip label={tabs.nome} />;
                    })}
                    <Chip
                      color={
                        cliente.statusChave === "ATIVO"
                          ? "primary"
                          : "secondary"
                      }
                      label={cliente.status}
                      variant="outlined"
                    />
                  </CardActions>
                </Flex>
              </CardActionArea>
            </Card>
          </Box>
        );
      })}
    </Flex>
  );
};

export default CadastroClientesListCards;
