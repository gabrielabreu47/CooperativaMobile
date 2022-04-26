import React, { useState, useEffect } from "react";
import { Center, Container } from "native-base";
import { dataDummies } from "../../constants";
import { ListTitles } from "../../Components";

export default function Videos({ navigation }) {
  const [videos, setVideos] = useState();
  useEffect(() => {
    //HERE WILL BE A GET TO THE DATABASE, THEN
    var response = dataDummies.videos;

    setVideos(response);
  }, []);

  return (
    <Center flex="1">
      <Container flex="1">
        <ListTitles items={videos} title="title" onPressGoTo="VideoSingle" />
      </Container>
    </Center>
  );
}
