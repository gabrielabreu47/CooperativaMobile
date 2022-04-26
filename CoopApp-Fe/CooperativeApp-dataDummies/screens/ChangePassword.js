import React, { useState } from "react";
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
import { object, string, ref } from "yup";
import { MaterialIcons } from "@expo/vector-icons";
import { apiCalls } from "../Utilites/apiCalls";

export default function ChangePassword({
  navigation,
  route: {
    params: { user },
  },
}) {
  const [success, setSuccess] = useState();
  const onSubmit = (values) => {
    apiCalls
      .changePassword(user.id, { password: values.password })
      .then((response) => {
        if (response.error) {
          return;
        }
        setSuccess(true);
        setTimeout(() => navigation.navigate("Login"), 2000);
      });
  };
  return (
    <Center flex="1">
      <Container flex="1">
        <Formik
          validateOnChange={false}
          validationSchema={validationSchema}
          initialValues={{ password: "", confirmPassword: "" }}
          onSubmit={onSubmit}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <VStack space="2" w="100%">
              <FormControl isInvalid={errors.password}>
                <Input
                  type="password"
                  onChangeText={handleChange("password")}
                  value={values.password}
                  fontSize="sm"
                  rounded="lg"
                  p={2}
                  placeholder="Nueva contraseña"
                />
                <FormControl.ErrorMessage>
                  {errors.password}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.confirmPassword}>
                <Input
                  type="password"
                  onChangeText={handleChange("confirmPassword")}
                  value={values.confirmPassword}
                  fontSize="sm"
                  rounded="lg"
                  p={2}
                  placeholder="Confirmar contraseña"
                />
                <FormControl.ErrorMessage>
                  {errors.confirmPassword}
                </FormControl.ErrorMessage>
              </FormControl>
              {success && (
                <Text color="success.600">Contraseña cambiada con éxito</Text>
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
    </Center>
  );
}
const validationSchema = object({
  password: string().required("Este campo es obligatorio"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Las contraseñas deben ser iguales")
    .required("Las contraseñas deben ser iguales"),
});
