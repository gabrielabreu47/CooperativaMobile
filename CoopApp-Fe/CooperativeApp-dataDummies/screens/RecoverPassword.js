import React from "react";
import {
  View,
  Text,
  Center,
  Container,
  VStack,
  FormControl,
  Input,
  Icon,
  Button,
} from "native-base";
import { Formik } from "formik";
import { object, string } from "yup";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationRouteContext } from "@react-navigation/native";
import { apiCalls } from "../Utilites/apiCalls";

export default function RecoverPassword({ navigation }) {
  const [raiseAlert, setRaiseAlert] = React.useState();
  const onSubmit = (values) => {
    apiCalls.getUserByDni(values.dni).then((response) => {
      if (response.error) {
        setRaiseAlert("invalidUser");
        return;
      }

      navigation.navigate("ChangePassword", { user: response.data });
    });
  };
  return (
    <Container flex="1">
      <Formik
        validateOnChange={false}
        validationSchema={validationSchema}
        initialValues={{ dni: "" }}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <VStack space="2" w="100%" mt="25%">
            <FormControl isInvalid={errors.dni}>
              <Input
                onChangeText={handleChange("dni")}
                value={values.dni}
                fontSize="sm"
                rounded="lg"
                p={2}
                placeholder="Cédula"
                InputLeftElement={
                  <Icon size="md" ml="3" as={MaterialIcons} name="person" />
                }
              />
              <FormControl.ErrorMessage>{errors.dni}</FormControl.ErrorMessage>
            </FormControl>
            {raiseAlert && (
              <Text color="danger.600">{alertMessages[raiseAlert]}</Text>
            )}
            <Button
              bg="primary.700"
              onPress={handleSubmit}
              rounded="lg"
              mt="7"
              _text={{ textTransform: "uppercase" }}
            >
              Recuperar contraseña
            </Button>
          </VStack>
        )}
      </Formik>
    </Container>
  );
}
const validationSchema = object({
  dni: string().required("Este campo es obligatorio"),
});
const alertMessages = {
  invalidUser: "Este usuario no existe",
};
