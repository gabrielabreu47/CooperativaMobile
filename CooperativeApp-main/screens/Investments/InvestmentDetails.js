import React from "react";
import { Center, Container, HStack, Text, VStack } from "native-base";
import moment from "moment";
import "moment/locale/es";

export default function InvestmentDetails() {
  const date = new moment().format("DD [de] MMMM, YYYY");
  return (
    <Center flex="1">
      <Container flex="1">
        <VStack w="100%" space="2">
          <HStack justifyContent="space-between">
            <Text bold color="primary.700">
              Fecha de inicio
            </Text>
            <Text>{date}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text bold color="primary.700">
              Cantidad invertida
            </Text>
            <Text>20,000 DOP</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text bold color="primary.700">
              Tasa de retorno
            </Text>
            <Text>15% anual</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text bold color="primary.700">
              Cantidad disponible
            </Text>
            <Text>50,000 DOP</Text>
          </HStack>
        </VStack>
      </Container>
    </Center>
  );
}
