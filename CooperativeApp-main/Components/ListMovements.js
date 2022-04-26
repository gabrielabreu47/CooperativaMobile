import {
  Box,
  Divider,
  Flex,
  HStack,
  Select,
  Text,
  VStack,
  ScrollView,
} from "native-base";
import React from "react";

export default function ListMovements({ movements, setFilterBy, filterBy }) {
  return (
    <Flex w="100%">
      <VStack space="2">
        <Select
          w="100%"
          onValueChange={(value) => setFilterBy({ date: value, ...filterBy })}
          fontSize="md"
          defaultValue="ux"
        >
          <Select.Item label="Últimos 30 días" value="ux" />
          <Select.Item label="Últimos 60 días" value="web" />
        </Select>
        <Select
          w="100%"
          onValueChange={(value) => setFilterBy({ type: value, ...filterBy })}
          fontSize="md"
          defaultValue="ux"
        >
          <Select.Item label="Créditos" value="ux" />
          <Select.Item label="Débitos" value="web" />
        </Select>
      </VStack>
      <ScrollView py="5">
        <VStack divider={<Divider />} space="5">
          {movements?.map((movement, index) => (
            <HStack key={index} justifyContent="space-between">
              <VStack space="3">
                <Text
                  w="20"
                  textAlign="center"
                  rounded="full"
                  alignSelf="flex-start"
                  bg="primary.700"
                  textTransform="uppercase"
                  fontSize="xs"
                  color="#ffffff"
                >
                  25, abril
                </Text>
                <Text>Retiro de dinero normal</Text>
                <Text>98909213</Text>
              </VStack>
              <Text bold color="red.400">
                -RD$ 2,000
              </Text>
            </HStack>
          ))}
        </VStack>
      </ScrollView>
    </Flex>
  );
}
