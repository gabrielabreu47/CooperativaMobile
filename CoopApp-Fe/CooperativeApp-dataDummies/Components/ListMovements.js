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
import React, { useState } from "react";
import moment from "moment";
import "moment/locale/es";
import { numberWithCommas } from "../Utilites/parsers";

export default function ListMovements({ movements }) {
  const [filterByType, setFilterByType] = useState("all");
  return (
    <Flex w="100%">
      <VStack space="2">
        <Select
          w="100%"
          onValueChange={(value) => setFilterByType(value)}
          fontSize="md"
          defaultValue={filterByType}
        >
          <Select.Item label="Todos" value="all" />
          <Select.Item label="Créditos" value="credit" />
          <Select.Item label="Débitos" value="debit" />
        </Select>
      </VStack>

      <ScrollView py="5" pb="10">
        <VStack space="5">
          {movements?.map((movement, index) => {
            if (filterByType == "all" || filterByType == movement.type) {
              console.log("fits", filterByType, movement.type);
              return (
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
                      {moment(movement.date).format("DD, MMMM")}
                    </Text>
                    <Text>{movement.description}</Text>
                    <Text>{movement.transactionId}</Text>
                  </VStack>
                  <Text bold color="red.400">
                    {`${
                      movement.type == "credit" ? "+RD$" : "-RD$"
                    } ${numberWithCommas(movement.amount)}`}
                  </Text>
                </HStack>
              );
            }
          })}
        </VStack>
      </ScrollView>
    </Flex>
  );
}
