import React from "react";
import { Box, Text } from "native-base";

export default function NoResults({ text }) {
  return (
    <Box w="100%" alignItems="center">
      <Text color="primary.700" bold fontSize="lg">
        Aún no tiene {text}
      </Text>
    </Box>
  );
}
