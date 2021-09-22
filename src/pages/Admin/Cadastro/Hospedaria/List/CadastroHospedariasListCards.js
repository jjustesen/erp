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
import { useQueryGetHospedarias } from "api/queries/queries";

export const CadastroHospedariasListCards = ({ onEdit, onCreate }) => {
  const { data } = useQueryGetHospedarias();

  return (
    <Flex width={1} flexWrap="wrap">
      {data.map((hospedaria) => {
        return (
          <Box width={1 / 4} p={10}>
            <Card>
              <CardActionArea onClick={() => onEdit(hospedaria.id)}>
                <Flex backgroundColor="#DCDCDC">
                  <CardHeader
                    style={{ width: "100%" }}
                    avatar={<Avatar aria-label="recipe">M</Avatar>}
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={hospedaria.nome}
                    subheader={hospedaria.cargo}
                  />
                </Flex>
                <Flex pb={10} flexDirection="column">
                  <CardContent>
                    <Flex mb={18}>
                      <Flex flex={1}>
                        <Text>Preço</Text>
                      </Flex>
                      <Flex flex={1}>
                        <Text>Quantidade</Text>
                      </Flex>
                    </Flex>
                    <Flex>
                      <Flex flex={1}>
                        <Text>{hospedaria.preco || "-"}</Text>
                      </Flex>
                      <Flex flex={1}>
                        <Text>{hospedaria.quantidade || "-"}</Text>
                      </Flex>
                    </Flex>
                  </CardContent>

                  <CardActions>
                    <Chip
                      color={hospedaria.ativo ? "primary" : "secondary"}
                      label={hospedaria.ativo ? "Ativo" : "Inativo"}
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

export default CadastroHospedariasListCards;
