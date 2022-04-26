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

export default function Discounts() {
  const [discounts, setDiscounts] = useState();

  useEffect(() => {
    // apiCalls.getAccounts().then((response) => {
    //   if (response.error) {
    //     console.log(
    //       "🚀 ~ file: Accounts.js ~ line 11 ~ apiCalls.getAccounts ~ response.error",
    //       response.error
    //     );
    //     return
    //   }
    //   setAccounts(response.data)
    // });

    setDiscounts([1, 2, 3, 4, 5, 6, 7]);
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
                    Descuento en helado
                  </Text>
                  <Text isTruncated={true} numberOfLines={3}>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic,
                  </Text>
                </VStack>
                <Text textAlign="right" bold>
                  15% de descuento
                </Text>
              </HStack>
            ))}
          </VStack>
        </ScrollView>
      </Container>
    </Center>
  );
}
