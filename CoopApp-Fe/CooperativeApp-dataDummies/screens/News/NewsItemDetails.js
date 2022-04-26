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

export default function NewsItemDetails({
  route: {
    params: { data },
  },
}) {
  return (
    <Center flex="1">
      <Container flex="1" pt="0" px="0">
        <Center w="100%" flex="1">
          <Image size="100%" source={{ uri: data.image }} alt="NewsPicture" />
        </Center>
        <Box flex="3" pt="5" px="10%">
          <ScrollView>
            <Heading color="primary.700" pb="2">
              {data.title}
            </Heading>
            <Text>{data.description}</Text>
          </ScrollView>
        </Box>
      </Container>
    </Center>
  );
}
