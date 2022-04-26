import { Center, Container, Box } from "native-base";
import React, { useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

export default function VideoSingle({
  route: {
    params: { data: video },
  },
}) {
  console.log(
    "🚀 ~ file: VideoSingle.js ~ line 6 ~ VideoSingle ~ video",
    video
  );
  const [playing, setPlaying] = useState();
  const onStateChange = (state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  };

  return (
    <Center flex="1">
      <Container flex="1">
        <Box rounded="md" h="175px" w="100%" overflow="hidden">
          <YoutubePlayer
            width="100%"
            height={250}
            playing={playing}
            videoId={video.videoId}
            onChangeState={onStateChange}
          />
        </Box>
      </Container>
    </Center>
  );
}
