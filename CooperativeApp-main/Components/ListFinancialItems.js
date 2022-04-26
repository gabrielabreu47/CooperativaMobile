import React from "react";
import {
  Center,
  Container,
  VStack,
  Pressable,
  HStack,
  Text,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function ListFinancialItems({ items, icon, onPressGoTo }) {
  const navigation = useNavigation();
  return (
    <VStack flex="4" space="5" w="100%">
      {items?.map((account, index) => (
        <Pressable
          key={index}
          onPress={() => {
            navigation.navigate(onPressGoTo);
          }}
        >
          <HStack
            borderBottomWidth={0.5}
            mb="3"
            pb="2"
            justifyContent="space-between"
          >
            <VStack>
              <HStack space="1">
                {icon}
                <Text bold color="primary.700">
                  Cuenta Aportaciones
                </Text>
              </HStack>
              <Text>1137788002</Text>
            </VStack>
            <VStack>
              <Text>Balance disponible</Text>
              <Text bold>350,000 DOP</Text>
            </VStack>
          </HStack>
        </Pressable>
      ))}
    </VStack>
  );
}
