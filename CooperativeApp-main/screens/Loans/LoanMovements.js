import React, { useEffect, useState } from "react";
import { Center, Container, Select, Text } from "native-base";
import { ListMovements } from "../../Components";

export default function LoanMovements() {
  const [movements, setMovements] = useState();
  const [filterBy, setFilterBy] = useState();

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

    setMovements([1, 2, 3, 4, 5, 6, 7]);
  }, []);
  return (
    <Center flex="1">
      <Container flex="1">
        <ListMovements
          movements={movements}
          setFilterBy={setFilterBy}
          filterBy={filterBy}
        />
      </Container>
    </Center>
  );
}
