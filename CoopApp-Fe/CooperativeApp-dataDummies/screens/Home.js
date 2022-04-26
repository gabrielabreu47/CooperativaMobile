import React, { useState, useEffect } from "react";
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
import { apiCalls } from "../Utilites/apiCalls";
import { numberWithCommas } from "../Utilites/parsers";
import { NoResults } from "../Components";
import { Context } from "../App";

export default function Home({ navigation }) {
  const { authUser } = React.useContext(Context);
  const [displayProducts, setDisplayProducts] = useState("");
  const [accounts, setAccounts] = useState();
  const [investments, setInvestments] = useState();
  const [loans, setLoans] = useState();

  useEffect(() => {
    apiCalls.getAccounts().then((response) => {
      if (response.error) {
        return;
      }

      setAccounts(response.data);
    });
    apiCalls.getInvestments().then((response) => {
      if (response.error) {
        return;
      }

      setInvestments(response.data);
    });
    apiCalls.getLoans().then((response) => {
      if (response.error) {
        return;
      }

      setLoans(response.data);
    });
  }, []);

  return (
    <Center flex="1">
      <Container flex="1">
        <Box alignItems="center" flex="1" w="100%">
          <Heading color="primary.700" fontSize="lg" bold>
            Bienvenido {(authUser.name + " " + authUser.lastName).toUpperCase()}
            !
          </Heading>
        </Box>
        <VStack flex="7" space="5" w="100%">
          {((!accounts && !investments && !loans) ||
            (accounts?.length == 0 &&
              investments?.length == 0 &&
              loans?.length == 0)) && <NoResults text="productos" />}
          {accounts?.length > 0 && (
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
                  <Text color="primary.700">{accounts[0].name}</Text>
                  <Text>{accounts[0].number}</Text>
                </VStack>
                <VStack>
                  <Text>Balance disponible</Text>
                  <Text bold>{`${numberWithCommas(
                    accounts[0].balance
                  )} DOP`}</Text>
                </VStack>
              </HStack>
            </Pressable>
          )}

          {investments?.length > 0 && (
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
                  <Text color="primary.700">{investments[0].name}</Text>
                  <Text>{investments[0].number}</Text>
                </VStack>
                <VStack>
                  <Text>Balance disponible</Text>
                  <Text bold>{`${numberWithCommas(
                    investments[0].balance
                  )} DOP`}</Text>
                </VStack>
              </HStack>
            </Pressable>
          )}

          {loans?.length > 0 && (
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
                  <Text color="primary.700">{loans[0].name}</Text>
                  <Text>{loans[0].number}</Text>
                </VStack>
                <VStack>
                  <Text>Balance disponible</Text>
                  <Text bold>{`${numberWithCommas(
                    loans[0].balance
                  )} DOP`}</Text>
                </VStack>
              </HStack>
            </Pressable>
          )}
        </VStack>
      </Container>
    </Center>
  );
}
