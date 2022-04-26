import React, { useEffect, useState } from "react";
import { apiCalls } from "../../Utilites/apiCalls";
import { Center, Container, Icon } from "native-base";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ListFinancialItems } from "../../Components";
import { dataDummies } from "../../constants";

export default function Accounts({ navigation }) {
  const [accounts, setAccounts] = useState();

  useEffect(() => {
    apiCalls.getAccounts().then((response) => {
      if (response.error) {
        console.log(
          "🚀 ~ file: Accounts.js ~ line 11 ~ apiCalls.getAccounts ~ response.error",
          response.error
        );
        return;
      }
      setAccounts(response.data);
    });
  }, []);

  return (
    <Center flex="1">
      <Container flex="1">
        <ListFinancialItems
          items={accounts}
          onPressGoTo="AccountMovements"
          icon={
            <Icon
              color="primary.700"
              size="md"
              as={MaterialCommunityIcons}
              name="piggy-bank"
            />
          }
        />
      </Container>
    </Center>
  );
}
