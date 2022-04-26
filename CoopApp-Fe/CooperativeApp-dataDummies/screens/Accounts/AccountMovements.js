import React, { useEffect, useState } from "react";
import { Center, Container, Select, Text } from "native-base";
import { ListMovements } from "../../Components";

export default function AccountMovements({
  route: {
    params: { data: account },
  },
}) {
  const [filterBy, setFilterBy] = useState();

  return (
    <Center flex="1">
      <Container flex="1">
        <ListMovements
          movements={account.movements}
          setFilterBy={setFilterBy}
          filterBy={filterBy}
        />
      </Container>
    </Center>
  );
}
