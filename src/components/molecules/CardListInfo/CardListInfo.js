import React from "react";

import { Avatar, Box } from "@material-ui/core";

import { getColor } from "random-material-color";
import { Email, Language, Phone } from "@material-ui/icons";

export const CardListInfo = ({ user }) => {
  return (
    <Box padding={3} display="flex" alignItems="center">
      <Box marginRight={2}>
        <Avatar
          alt={user.name}
          style={{
            color: "white",
            backgroundColor: getColor({ shades: ["400"] }),
          }}
        ></Avatar>
      </Box>

      <Box display="flex" flexDirection="column" flex={1}>
        <Box display="flex" marginBottom={1}>
          <Box fontWeight="fontWeightBold">{user.name}</Box>
        </Box>

        <Box display="flex">
          <Box marginRight={1}>
            <Phone />
          </Box>

          <Box fontWeight="fontWeightLight">{user.phone}</Box>
        </Box>

        <Box display="flex">
          <Box marginRight={1}>
            <Email />
          </Box>

          <Box fontWeight="fontWeightLight">{user.email}</Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent alignItems="center">
        <Box marginRight={1}>{user.website}</Box>

        <Box>
          <Language />
        </Box>
      </Box>
    </Box>
  );
};
