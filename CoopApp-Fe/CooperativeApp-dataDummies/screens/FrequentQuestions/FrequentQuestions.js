import React, { useState, useEffect } from "react";
import { View, Text, Center, Container } from "native-base";
import { ListTitles } from "../../Components";
import { dataDummies } from "../../constants";
import { apiCalls } from "../../Utilites/apiCalls";

export default function FrequentQuestions() {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    apiCalls.getFaqs().then((response) => {
      if (response.error) {
        console.log(
          "🚀 ~ file: Accounts.js ~ line 11 ~ apiCalls.getAccounts ~ response.error",
          response.error
        );
        return;
      }
      setQuestions(response.data);
    });
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
