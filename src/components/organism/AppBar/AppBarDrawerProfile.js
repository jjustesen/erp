import { Flex } from "../../elements/Flex/Flex";
import { Text } from "../../elements/Text/Text";

export const AppBarDrawerProfile = () => {
  return (
    <Flex flexDirection="column" p={16}>
      <Text fontSize="20px" fontWeight="bold">
        Johannes J.
      </Text>
      <Text fontSize="12px">Hotel Ficticio</Text>
    </Flex>
  );
};
