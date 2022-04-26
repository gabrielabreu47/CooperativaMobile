import React, { useState, useEffect } from "react";
import { Center, Container } from "native-base";
import { dataDummies } from "../../constants";
import { ListTitles } from "../../Components";
import { apiCalls } from "../../Utilites/apiCalls";

export default function Videos({ navigation }) {
  const [videos, setVideos] = useState();
  useEffect(() => {
    apiCalls.getVideos().then((response) => {
      if (response.error) {
        console.log(
          "🚀 ~ file: Accounts.js ~ line 11 ~ apiCalls.getAccounts ~ response.error",
          response.error
        );
        return;
      }
      setVideos(response.data);
    });
  }, []);

  return (
    <Center flex="1">
      <Container flex="1">
        <ListTitles items={videos} title="title" onPressGoTo="VideoSingle" />
      </Container>
    </Center>
  );
}
