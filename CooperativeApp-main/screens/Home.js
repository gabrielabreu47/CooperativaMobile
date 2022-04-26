import React, { useState } from "react";
import {
  Text,
  Center,
  Container,
  VStack,
  Box,
  HStack,
  Icon,
  Heading,
  Select,
  Pressable,
} from "native-base";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [displayProducts, setDisplayProducts] = useState("");

  return (
    <Center flex="1">
      <Container flex="1">
        <Box alignItems="center" flex="1" w="100%">
          <Heading color="primary.700" fontSize="lg" bold>
            Bienvenido Carlos!
          </Heading>
          <Text fontSize="xs">Última conexión 10/08/2021 4:01:30 pm</Text>
          <Select
            mt="2"
            w="100%"
            onValueChange={(value) => setDisplayProducts(value)}
            fontSize="lg"
            placeholder="Mostrar: Todos mis productos"
          >
            <Select.Item label="Mostrar: Cuentas de ahorro" value="ux" />
            <Select.Item label="Mostrar: Cuentas corrientes" value="web" />
          </Select>
        </Box>
        <VStack flex="4" space="5" w="100%">
          <Pressable
            onPress={() => {
              navigation.navigate("Accounts");
            }}
          >
            <HStack alignItems="center" pb="4" space="2">
              <Icon
                color="primary.700"
                size="md"
                as={MaterialCommunityIcons}
                name="piggy-bank"
              />
              <Text bold color="primary.700">
                Cuentas
              </Text>
            </HStack>
            <HStack
              borderBottomWidth={0.5}
              mb="5"
              pb="2"
              justifyContent="space-between"
            >
              <VStack>
                <Text color="primary.700">Cuenta Aportaciones</Text>
                <Text>1137788002</Text>
              </VStack>
              <VStack>
                <Text>Balance disponible</Text>
                <Text bold>350,000 DOP</Text>
              </VStack>
            </HStack>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Investments");
            }}
          >
            <HStack alignItems="center" pb="4" space="2">
              <Icon
                color="primary.700"
                size="md"
                as={MaterialCommunityIcons}
                name="circle-multiple"
              />
              <Text bold color="primary.700">
                Inversiones
              </Text>
            </HStack>
            <HStack
              borderBottomWidth={0.5}
              mb="5"
              pb="2"
              justifyContent="space-between"
            >
              <VStack>
                <Text color="primary.700">Certificado Financiero</Text>
                <Text>1137788002</Text>
              </VStack>
              <VStack>
                <Text>Balance disponible</Text>
                <Text bold>350,000 DOP</Text>
              </VStack>
            </HStack>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Loans");
            }}
          >
            <HStack alignItems="center" pb="4" space="2">
              <Icon
                color="primary.700"
                size="md"
                as={MaterialIcons}
                name="payments"
              />
              <Text bold color="primary.700">
                Préstamos
              </Text>
            </HStack>
            <HStack
              borderBottomWidth={0.5}
              mb="5"
              pb="2"
              justifyContent="space-between"
            >
              <VStack>
                <Text color="primary.700">Préstamo Normal</Text>
                <Text>1137788002</Text>
              </VStack>
              <VStack>
                <Text>Balance disponible</Text>
                <Text bold>350,000 DOP</Text>
              </VStack>
            </HStack>
            <HStack
              borderBottomWidth={0.5}
              mb="5"
              pb="2"
              justifyContent="space-between"
            >
              <VStack>
                <Text color="primary.700">Préstamo Gerencial</Text>
                <Text>1137788002</Text>
              </VStack>
              <VStack>
                <Text>Balance disponible</Text>
                <Text bold>350,000 DOP</Text>
              </VStack>
            </HStack>
          </Pressable>
        </VStack>
      </Container>
    </Center>
  );
}
