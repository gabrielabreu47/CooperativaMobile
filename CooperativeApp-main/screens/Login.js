import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  Icon,
  Image,
  Input,
  Text,
  VStack,
  Pressable,
} from "native-base";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { object, string } from "yup";
import { apiCalls } from "../Utilites/apiCalls";

export default function Login({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  const changePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (values) => {
    // const response = await apiCalls.login();
    navigation.navigate("AppHome");
  };

  return (
    <Container flex="1" w="100%" alignItems="center">
      <Center flex="1">
        <Image
          source={require("../assets/favicon.png")}
          alt="brand_logo"
          size="lg"
        />
      </Center>
      <Box w="100%" flex="2">
        <Formik
          validateOnChange={false}
          validationSchema={validationSchema}
          initialValues={{ id_card: "", password: "" }}
          onSubmit={onSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <VStack space="2">
              <FormControl isInvalid={errors.id_card}>
                <Input
                  onChangeText={handleChange("id_card")}
                  value={values.id_card}
                  fontSize="sm"
                  rounded="lg"
                  p={2}
                  placeholder="Cédula"
                  InputLeftElement={
                    <Icon size="md" ml="3" as={MaterialIcons} name="person" />
                  }
                />
                <FormControl.ErrorMessage>
                  {errors.id_card}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password}>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChangeText={handleChange("password")}
                  value={values.password}
                  fontSize="sm"
                  rounded="lg"
                  p={2}
                  placeholder="Contraseña"
                  InputLeftElement={
                    <Icon
                      size="md"
                      ml="3"
                      as={MaterialCommunityIcons}
                      name="key"
                    />
                  }
                  InputRightElement={
                    <Icon
                      onPress={changePasswordVisibility}
                      size="md"
                      mr="3"
                      as={MaterialIcons}
                      name={showPassword ? "visibility" : "visibility-off"}
                    />
                  }
                />
                <FormControl.ErrorMessage>
                  {errors.password}
                </FormControl.ErrorMessage>
              </FormControl>
              <Button
                bg="primary.700"
                onPress={handleSubmit}
                rounded="lg"
                mt="7"
                _text={{ textTransform: "uppercase" }}
              >
                inciar sesion
              </Button>
            </VStack>
          )}
        </Formik>

        <Pressable onPress={() => navigation.navigate("RecoverPassword")}>
          <Text pt="2" color="#0891b2">
            ¿Olvidó su contraseña?
          </Text>
        </Pressable>
      </Box>
    </Container>
  );
}

const validationSchema = object({
  id_card: string().required("Este campo es obligatorio"),
  password: string().required("Este campo es obligatorio"),
});
