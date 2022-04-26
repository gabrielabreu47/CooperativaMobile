import "react-native-gesture-handler";
import {
  Container,
  NativeBaseProvider,
  extendTheme,
  StatusBar,
  Center,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./Navigators/MainNavigator";
import React from "react";

export const Context = React.createContext();

export default function App() {
  const [authUser, setAuthUser] = React.useState();
  const theme = extendTheme({
    components: {
      Container: {
        baseStyle: {
          maxW: "100%",
          w: "100%",
          h: { base: "80%" },
          px: "10%",
          py: "5%",
          bg: "#ffffff",
        },
      },
      ScrollView: {
        baseStyle: {
          showsVerticalScrollIndicator: false,
          showsHorizontalScrollIndicator: false,
        },
      },
    },
  });
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <Context.Provider value={{ authUser, setAuthUser }}>
          <MainNavigator />
        </Context.Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
