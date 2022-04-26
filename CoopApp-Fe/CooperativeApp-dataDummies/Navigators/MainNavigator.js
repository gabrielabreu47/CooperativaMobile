import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import AppHommeNavigator from "./AppHomeNavigator";
import * as Screens from "../screens";
import { Box, Center, Container } from "native-base";

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        drawerActiveTintColor: "#0e7490",
        headerTintColor: "#0e7490",
      }}
    >
      <Stack.Screen
        name="Login"
        component={Screens.Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RecoverPassword"
        component={Screens.RecoverPassword}
        options={{
          title: "Recuperar contraseña",
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={Screens.ChangePassword}
        options={{
          title: "Cambiar contraseña",
        }}
      />

      <Stack.Screen
        name="AppHome"
        component={AppHommeNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AccountMovements"
        component={Screens.AccountMovements}
        options={({ route }) => ({
          title: `Cuenta ${route.params.title}`,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen
        name="LoanMovements"
        component={Screens.LoanMovements}
        options={({ route }) => ({
          title: `Préstamo ${route.params.title}`,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen
        name="InvestmentDetails"
        component={Screens.InvestmentDetails}
        options={({ route }) => ({
          title: `Inversión ${route.params.title}`,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen
        name="NewsItemDetails"
        component={Screens.NewsItemDetails}
        options={{
          title: "Noticia",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="VideoSingle"
        component={Screens.VideoSingle}
        options={({ route }) => ({
          title: route.params.title,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
      <Stack.Screen
        name="QuestionAnswer"
        component={Screens.QuestionAnswer}
        options={({ route }) => ({
          title: route.params.title,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        })}
      />
    </Stack.Navigator>
  );
}
