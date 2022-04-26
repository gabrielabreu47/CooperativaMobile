import React, { useState, useEffect } from "react";
import {
  Text,
  Center,
  Container,
  HStack,
  VStack,
  Divider,
  ScrollView,
} from "native-base";
import { dataDummies } from "../constants";
import { apiCalls } from "../Utilites/apiCalls";

export default function Discounts() {
  const [discounts, setDiscounts] = useState();

  useEffect(() => {
    apiCalls.getDiscounts().then((response) => {
      if (response.error) {
        console.log(
          "🚀 ~ file: Accounts.js ~ line 11 ~ apiCalls.getAccounts ~ response.error",
          response.error
        );
        return;
      }
      setDiscounts(response.data);
    });
  }, []);
  return (
    <Center flex="1">
      <Container flex="1">
        <ScrollView w="100%">
          <VStack space="5" divider={<Divider />}>
            {discounts?.map((discount, index) => (
              <HStack flex="1" rounded="md" key={index}>
                <VStack flex="1" space="3">
                  <Text bold color="primary.700">
                    {discount.title}
                  </Text>
                  <Text isTruncated={true} numberOfLines={3}>
                    {discount.description}
                  </Text>
                </VStack>
                <Text textAlign="right" bold>
                  {`${discount.percentage_discounted * 100}% de descuento`}
                </Text>
              </HStack>
            ))}
          </VStack>
        </ScrollView>
      </Container>
    </Center>
  );
}
