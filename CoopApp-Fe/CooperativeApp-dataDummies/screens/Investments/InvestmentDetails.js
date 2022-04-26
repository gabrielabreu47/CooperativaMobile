import React from "react";
import { Center, Container, HStack, Text, VStack } from "native-base";
import moment from "moment";
import "moment/locale/es";
import { numberWithCommas } from "../../Utilites/parsers";

export default function InvestmentDetails({
  route: {
    params: { data: investment },
  },
}) {
  const date = new moment(investment.invested_at).format("DD [de] MMMM, YYYY");
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
            <Text>{`${numberWithCommas(investment.amount_invested)} DOP`}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text bold color="primary.700">
              Tasa de retorno
            </Text>
            <Text>{`${investment.yield * 100}% anual`}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text bold color="primary.700">
              Cantidad disponible
            </Text>
            <Text>{`${investment.balance} DOP`}</Text>
          </HStack>
        </VStack>
      </Container>
    </Center>
  );
}
