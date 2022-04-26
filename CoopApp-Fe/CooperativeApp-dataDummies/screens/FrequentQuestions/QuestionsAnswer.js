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

export default function QuestionAnswer({
  route: {
    params: { data: question },
  },
}) {
  return (
    <Center flex="1">
      <Container flex="1">
        <ScrollView>
          <Text>{question.answer}</Text>
        </ScrollView>
      </Container>
    </Center>
  );
}
