import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  ScrollView,
  Text,
} from "native-base";
import React from "react";

export default function NewsItemDetails() {
  return (
    <Center flex="1">
      <Container flex="1" pt="0" px="0">
        <Center w="100%" flex="1">
          <Image
            size="100%"
            source={require("../../assets/loginBackground.jpg")}
            alt="NewsPicture"
          />
        </Center>
        <Box flex="3" pt="5" px="10%">
          <ScrollView>
            <Heading color="primary.700" pb="2">
              Título de la noticia
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </ScrollView>
        </Box>
      </Container>
    </Center>
  );
}
