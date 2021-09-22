import React, { useContext } from "react";

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { AppBarDrawerProfile } from "./AppBarDrawerProfile";

import { LabelOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Text } from "../../elements/Text/Text";
import { Flex } from "../../elements/Flex/Flex";
import styled from "styled-components";
import { routes } from "../../../constants/routes";
import { AuthContext } from "../../../providers/auth";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useTranslation } from "react-i18next";
export const AppBarDrawer = ({ opened, toggle }) => {
  const { logout } = useContext(AuthContext);
  const { t } = useTranslation();

  const MenuStyle = styled(Flex)`
    a {
      color: black;
      width: 100%;
      text-decoration: none;
    }
    .MuiListItem-button:hover {
      text-decoration: none;
      background-color: rgba(79, 154, 148, 0.12);
    }
  `;

  return (
    <Drawer anchor="left" open={opened} onClose={toggle}>
      <Box width={300}>
        <AppBarDrawerProfile />

        <Divider />
        {routes.map((modulo) => {
          return (
            <>
              <List>
                <Flex my="6px">
                  <Text fontSize={14} px={16}>
                    {modulo.name}
                  </Text>
                </Flex>
                {modulo.children.map((feature) => {
                  return (
                    <MenuStyle>
                      <Link to={feature.path}>
                        <ListItem button>
                          <ListItemIcon>
                            <LabelOutlined />
                          </ListItemIcon>

                          <ListItemText primary={feature.name} />
                        </ListItem>
                      </Link>
                    </MenuStyle>
                  );
                })}
              </List>
              <Divider />
            </>
          );
        })}

        <List>
          <MenuStyle>
            <ListItem button onClick={logout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={t("exit")} />
            </ListItem>
          </MenuStyle>
        </List>
      </Box>
    </Drawer>
  );
};
