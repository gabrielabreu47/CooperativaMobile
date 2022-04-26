import React, { useEffect, useState } from "react";
import { apiCalls } from "../../Utilites/apiCalls";
import { Center, Container, Icon } from "native-base";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ListFinancialItems } from "../../Components";

export default function Investments({ navigation }) {
  const [investments, setInvestments] = useState();

  useEffect(() => {
    // apiCalls.getAccounts().then((response) => {
    //   if (response.error) {
    //     console.log(
    //       "🚀 ~ file: Accounts.js ~ line 11 ~ apiCalls.getAccounts ~ response.error",
    //       response.error
    //     );
    //     return
    //   }
    //   setAccounts(response.data)
    // });

    setInvestments([1, 2, 3, 4]);
  }, []);

  return (
    <Center flex="1">
      <Container flex="1">
        <ListFinancialItems
          items={investments}
          onPressGoTo="InvestmentDetails"
          icon={
            <Icon
              color="primary.700"
              size="md"
              as={MaterialCommunityIcons}
              name="circle-multiple"
            />
          }
        />
      </Container>
    </Center>
  );
}
