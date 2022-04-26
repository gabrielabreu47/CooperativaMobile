import React, { useState } from "react";
import {
  Button,
  Center,
  Container,
  FormControl,
  Input,
  VStack,
  TextArea,
  Text,
} from "native-base";
import { Formik } from "formik";
import { object, string } from "yup";
import { apiCalls } from "../Utilites/apiCalls";

export default function Help({ navigation }) {
  const [isSent, setIsSent] = useState(false);
  const changePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (values) => {
    // const response = await apiCalls.login();
    setIsSent(true);
    setTimeout(() => navigation.navigate("Home"), 2000);
  };

  return (
    <Center flex="1">
      <Container flex="1">
        <Formik
          validateOnChange={false}
          validationSchema={validationSchema}
          initialValues={{ topic: "", description: "" }}
          onSubmit={onSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <VStack space="2" w="100%">
              <FormControl isInvalid={errors.topic}>
                <FormControl.Label>Motivo de la ayuda</FormControl.Label>
                <Input
                  onChangeText={handleChange("topic")}
                  value={values.topic}
                  fontSize="sm"
                  rounded="lg"
                  p={2}
                  placeholder="Asunto"
                />
                <FormControl.ErrorMessage>
                  {errors.topic}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.description}>
                <FormControl.Label>Descripción</FormControl.Label>
                <TextArea
                  isInvalid={errors.description}
                  onChangeText={handleChange("description")}
                  value={values.description}
                  fontSize="sm"
                  rounded="lg"
                  p={2}
                  placeholder="Mensaje completo de la ayuda que necesita"
                />
                <FormControl.ErrorMessage>
                  {errors.description}
                </FormControl.ErrorMessage>
              </FormControl>
              {isSent && (
                <Text color="success.600">
                  Su mensaje se ha enviado. Pronto le estaremos dando respuesta
                </Text>
              )}

              <Button
                bg="primary.700"
                onPress={handleSubmit}
                rounded="lg"
                mt="7"
                _text={{ textTransform: "uppercase" }}
              >
                Enviar
              </Button>
            </VStack>
          )}
        </Formik>
      </Container>
    </Center>
  );
}

const validationSchema = object({
  topic: string().required("Este campo es obligatorio"),
  description: string().required("Este campo es obligatorio"),
});
