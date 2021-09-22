import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import { Avatar, CardHeader, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Flex } from "../../../../../components/elements/Flex/Flex";
import { Text } from "../../../../../components/elements/Text/Text";
import { Box } from "../../../../../components/elements/Box/Box";
import { useQueryGetProdutos } from "api/queries/queries";

export const CadastroProdutosListCards = ({ onEdit }) => {
  const { data } = useQueryGetProdutos();

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
                    avatar={<Avatar aria-label="recipe">M</Avatar>}
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={cliente.nome}
                  />
                </Flex>
                <Flex pb={10} flexDirection="column">
                  <CardContent>
                    <Flex mb={18}>
                      <Flex flex={1}>
                        <Text>Preço</Text>
                      </Flex>
                      <Flex flex={1}>
                        <Text>Codigo</Text>
                      </Flex>
                    </Flex>
                    <Flex>
                      <Flex flex={1}>
                        <Text>{cliente.preco}</Text>
                      </Flex>
                      <Flex flex={1}>
                        <Text>{cliente.id}</Text>
                      </Flex>
                    </Flex>
                  </CardContent>
                </Flex>
              </CardActionArea>
            </Card>
          </Box>
        );
      })}
    </Flex>
  );
};

export default CadastroProdutosListCards;
