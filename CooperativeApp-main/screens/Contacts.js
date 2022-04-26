import React from "react";
import {
  View,
  Text,
  Center,
  Container,
  VStack,
  HStack,
  Box,
} from "native-base";
import { dataDummies } from "../constants";
import MapView from "react-native-maps";

export default function Contacts() {
  const [contacts, setContacts] = React.useState();

  React.useEffect(() => {
    const response = dataDummies.contacts;
    setContacts(response);
  }, []);
  return (
    <Center flex="1">
      <Container flex="1">
        <VStack flex="1" w="100%" space="5">
          {contacts?.map((contact, index) => (
            <HStack key={index} space="1" alignItems="center">
              <Text bold fontSize="lg" color="primary.700">
                {`${contact.name}:`}
              </Text>
              <Text
                flex="1"
                isTruncated
                numberOfLines={2}
              >{`${contact.value}`}</Text>
            </HStack>
          ))}
        </VStack>
        <VStack
          position="absolute"
          top="60%"
          bottom="12"
          left="0"
          right="0"
          alignItems="center"
        >
          <Text pb="6" color="primary.700" fontSize="lg" bold>
            Ubicación
          </Text>
          <Box alignSelf="flex-start" w="100%" overflow="hidden">
            <MapView
              style={{ width: "100%", height: "100%" }}
              initialRegion={dataDummies.location}
            >
              <MapView.Marker
                coordinate={dataDummies.location}
                title="marker"
              />
            </MapView>
          </Box>
        </VStack>
      </Container>
    </Center>
  );
}
