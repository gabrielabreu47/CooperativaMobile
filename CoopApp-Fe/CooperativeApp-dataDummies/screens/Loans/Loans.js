import React, { useEffect, useState } from "react";
import { Center, Container, Icon } from "native-base";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { apiCalls } from "../../Utilites/apiCalls";
import { ListFinancialItems } from "../../Components";
import { dataDummies } from "../../constants";

export default function Loans() {
  const [loans, setLoans] = useState();

  useEffect(() => {
    apiCalls.getLoans().then((response) => {
      if (response.error) {
        console.log(
          "🚀 ~ file: Accounts.js ~ line 11 ~ apiCalls.getAccounts ~ response.error",
          response.error
        );
        return;
      }
      setLoans(response.data);
    });
  }, []);

  return (
    <Center flex="1">
      <Container flex="1">
        <ListFinancialItems
          items={loans}
          onPressGoTo="LoanMovements"
          icon={
            <Icon
              color="primary.700"
              size="md"
              as={MaterialIcons}
              name="payments"
            />
          }
        />
      </Container>
    </Center>
  );
}
