import React from "react";
import { Text, ScrollView, VStack, HStack, Icon, Pressable } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ListTitles({ items, title, onPressGoTo }) {
  const navigation = useNavigation();
  return (
    <ScrollView w="100%">
      <VStack space="5">
        {items?.map((item, index) => (
          <Pressable
            onPress={() =>
              navigation.navigate(onPressGoTo, {
                title: item[title],
                data: item,
              })
            }
          >
            <HStack
              space="2"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text key={index} bold fontSize="lg" color="primary.700">
                {item[title]}
              </Text>
              <Icon size="lg" as={MaterialIcons} name="chevron-right" />
            </HStack>
          </Pressable>
        ))}
      </VStack>
    </ScrollView>
  );
}
