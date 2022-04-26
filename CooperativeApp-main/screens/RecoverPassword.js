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

export default function RecoverPassword({ navigation }) {
  const onSubmit = () => {
    navigation.navigate("ChangePassword");
  };
  return (
    <Container flex="1">
      <Formik
        validateOnChange={false}
        validationSchema={validationSchema}
        initialValues={{ email: "" }}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <VStack space="2" w="100%" mt="25%">
            <FormControl isInvalid={errors.email}>
              <Input
                onChangeText={handleChange("email")}
                value={values.email}
                fontSize="sm"
                rounded="lg"
                p={2}
                placeholder="Correo electrónico"
                InputLeftElement={
                  <Icon size="md" ml="3" as={MaterialIcons} name="person" />
                }
              />
              <FormControl.ErrorMessage>
                {errors.email}
              </FormControl.ErrorMessage>
            </FormControl>

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
  email: string()
    .email("Este no es un correo válido")
    .required("Este campo es obligatorio"),
});
