import React, { useState, useEffect } from "react";
import {
  Text,
  Center,
  Container,
  HStack,
  VStack,
  Divider,
  ScrollView,
  Box,
  Image,
  Pressable,
} from "native-base";

export default function News({ navigation }) {
  const [news, setNews] = useState();

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

    setNews([1, 2, 3, 4, 5, 6, 7]);
  }, []);
  return (
    <Center flex="1">
      <Container flex="1">
        <ScrollView w="100%">
          <VStack space="5" divider={<Divider />}>
            {news?.map((newsItem, index) => (
              <Pressable
                onPress={() => navigation.navigate("NewsItemDetails")}
                flex="1"
              >
                <HStack key={index}>
                  <Center flex="1" pr="2">
                    <Image
                      borderRadius="md"
                      size="100%"
                      source={require("../../assets/loginBackground.jpg")}
                      alt="NewsPicture"
                    />
                  </Center>

                  <VStack flex="2" space="3">
                    <Text bold color="primary.700">
                      Descuento en helado
                    </Text>
                    <Text isTruncated={true} numberOfLines={2}>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic,
                    </Text>
                  </VStack>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </ScrollView>
      </Container>
    </Center>
  );
}
