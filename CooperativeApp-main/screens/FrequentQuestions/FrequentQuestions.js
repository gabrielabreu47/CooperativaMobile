import React, { useState } from "react";
import { View, Text, Center, Container } from "native-base";
import { ListTitles } from "../../Components";
import { dataDummies } from "../../constants";

export default function FrequentQuestions() {
  const [questions, setQuestions] = useState();

  React.useEffect(() => {
    const response = dataDummies.faqs;
    setQuestions(response);
  }, []);

  return (
    <Center flex="1">
      <Container flex="1">
        <ListTitles
          items={questions}
          title="question"
          onPressGoTo="QuestionAnswer"
        />
      </Container>
    </Center>
  );
}
