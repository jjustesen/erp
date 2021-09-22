import { Avatar, Chip, IconButton } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Flex } from "../../elements/Flex/Flex";
import { Text } from "../../elements/Text/Text";
import AddIcon from "@material-ui/icons/Add";

const StyleCrudHeader = styled(Flex)`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  flex-direction: column;

  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 24px;
  border-bottom: 1px solid #c4c4c4;
`;

const AvatarStyle = styled(Avatar)`
  width: 82px;
  height: 82px;
`;

const ChipStyle = styled(Chip)`
  margin-right: 12px;
`;

const CrudHeader = ({ nome, chip, tabs: HeaderTabs, children }) => {
  return (
    <StyleCrudHeader>
      <Flex>
        <AvatarStyle>H</AvatarStyle>
        <Flex
          mx="16px"
          my="8px"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Text fontWeight="bold">{nome}</Text>
          <Flex>
            {chip.map((tabs) => {
              return <ChipStyle label={tabs.nome} />;
            })}

            <IconButton
              color="primary"
              style={{ width: "32px", height: "32px" }}
              aria-label="delete"
            >
              <AddIcon fontSize="medium" />
            </IconButton>
          </Flex>
        </Flex>
      </Flex>
      <Flex mt={12}>{HeaderTabs && <HeaderTabs />}</Flex>
    </StyleCrudHeader>
  );
};

export default CrudHeader;
