import React from "react";
import {
  Center,
  Container,
  VStack,
  Pressable,
  HStack,
  Text,
  ScrollView,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { numberWithCommas } from "../Utilites/parsers";

export default function ListFinancialItems({ items, icon, onPressGoTo }) {
  const navigation = useNavigation();
  return (
    <ScrollView w="100%">
      <VStack flex="4" space="5" w="100%">
        {items?.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => {
              navigation.navigate(onPressGoTo, {
                title: item.name,
                data: item,
              });
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
                    {item.name}
                  </Text>
                </HStack>
                <Text> {item.number}</Text>
              </VStack>
              <VStack>
                <Text>Balance disponible</Text>
                <Text bold>{`${numberWithCommas(item.balance)} DOP`}</Text>
              </VStack>
            </HStack>
          </Pressable>
        ))}
      </VStack>
    </ScrollView>
  );
}
