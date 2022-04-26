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
import { dataDummies } from "../../constants";
import { apiCalls } from "../../Utilites/apiCalls";

export default function News({ navigation }) {
  const [news, setNews] = useState();

  useEffect(() => {
    apiCalls.getNews().then((response) => {
      if (response.error) {
        console.log(
          "🚀 ~ file: Accounts.js ~ line 11 ~ apiCalls.getAccounts ~ response.error",
          response.error
        );
        return;
      }
      setNews(response.data);
    });
  }, []);
  return (
    <Center flex="1">
      <Container flex="1">
        <ScrollView w="100%">
          <VStack space="5" divider={<Divider />}>
            {news?.map((newsItem, index) => (
              <Pressable
                key={index}
                onPress={() =>
                  navigation.navigate("NewsItemDetails", { data: newsItem })
                }
                flex="1"
              >
                <HStack key={index}>
                  <Center flex="1" pr="2">
                    <Image
                      borderRadius="md"
                      size="100%"
                      source={{ uri: newsItem.image }}
                      alt="NewsPicture"
                    />
                  </Center>

                  <VStack flex="2" space="3">
                    <Text bold color="primary.700">
                      {newsItem.title}
                    </Text>
                    <Text isTruncated={true} numberOfLines={2}>
                      {newsItem.previewInfo}
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
