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
import { useQueryGetFuncionarios } from "api/queries/queries";
import funcionarios from "../funcionarios";

export const CadastroFuncionariosListCards = ({ onEdit, onCreate }) => {
  const { data } = useQueryGetFuncionarios();

  return (
    <Flex width={1} flexWrap="wrap">
      {data.map((cliente) => {
        return (
          <Box width={1 / 4} p={10}>
            <Card>
              <CardActionArea onClick={() => onEdit(cliente.id)}>
                <Flex backgroundColor="#DCDCDC">
                  <CardHeader
                    style={{ width: "100%" }}
                    avatar={
                      <Avatar aria-label="recipe">
                        {cliente.nome.substr(0, 2)}
                      </Avatar>
                    }
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
                        <Text>{cliente.email || "-"}</Text>
                      </Flex>
                      <Flex flex={1}>
                        <Text>{cliente.telefone || "-"}</Text>
                      </Flex>
                    </Flex>
                  </CardContent>

                  <CardActions>
                    {funcionarios[0].chip.map((tabs) => {
                      return <Chip label={tabs.nome} />;
                    })}
                    <Chip color={"primary"} label="Ativo" variant="outlined" />
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

export default CadastroFuncionariosListCards;
