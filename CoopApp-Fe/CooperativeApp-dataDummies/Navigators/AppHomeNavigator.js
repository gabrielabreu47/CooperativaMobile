import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  IconButton,
  Pressable,
  Text,
} from "native-base";
import * as Screens from "../screens";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRef, useEffect, useState } from "react";

const Drawer = createDrawerNavigator();

export default function AppHomeNavigator() {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: "#0e7490",
        headerTintColor: "#0e7490",
        drawerActiveBackgroundColor: "#cffafe",
        headerRight: ({ tintColor }) => (
          <Pressable onPress={() => navigation.navigate("News")} m="2">
            <Icon
              size="lg"
              color={tintColor}
              as={MaterialCommunityIcons}
              name="bell-outline"
            />
          </Pressable>
        ),
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Screens.Home}
        options={{
          title: "Inicio",
          drawerLabel: ({ focused }) => (
            <HStack alignItems="center" space="2">
              <Icon
                size="lg"
                color={focused ? "primary.700" : "#656566"}
                as={MaterialCommunityIcons}
                name="home-outline"
              />
              <Text bold color={focused ? "primary.700" : "#656566"}>
                Inicio
              </Text>
            </HStack>
          ),
        }}
      />
      <Drawer.Screen
        name="Accounts"
        component={Screens.Accounts}
        options={{
          title: "Cuentas",
          drawerLabel: ({ focused }) => (
            <HStack alignItems="center" space="2">
              <Icon
                size="lg"
                color={focused ? "primary.700" : "#656566"}
                as={MaterialCommunityIcons}
                name="bank-outline"
              />
              <Text bold color={focused ? "primary.700" : "#656566"}>
                Cuentas
              </Text>
            </HStack>
          ),
        }}
      />

      <Drawer.Screen
        name="Investments"
        component={Screens.Investments}
        options={{
          title: "Inversiones",
          drawerLabel: ({ focused }) => (
            <HStack alignItems="center" space="2">
              <Icon
                size="lg"
                color={focused ? "primary.700" : "#656566"}
                as={MaterialIcons}
                name="toll"
              />
              <Text bold color={focused ? "primary.700" : "#656566"}>
                Inversiones
              </Text>
            </HStack>
          ),
        }}
      />
      <Drawer.Screen
        name="Loans"
        component={Screens.Loans}
        options={{
          title: "Préstamos",
          drawerLabel: ({ focused }) => (
            <HStack alignItems="center" space="2">
              <Icon
                size="lg"
                color={focused ? "primary.700" : "#656566"}
                as={MaterialCommunityIcons}
                name="cash-multiple"
              />
              <Text bold color={focused ? "primary.700" : "#656566"}>
                Préstamos
              </Text>
            </HStack>
          ),
        }}
      />
      <Drawer.Screen
        name="Discounts"
        component={Screens.Discounts}
        options={{
          title: "Descuentos",
          drawerLabel: ({ focused }) => (
            <HStack alignItems="center" space="2">
              <Icon
                size="lg"
                color={focused ? "primary.700" : "#656566"}
                as={MaterialCommunityIcons}
                name="tag-outline"
              />
              <Text bold color={focused ? "primary.700" : "#656566"}>
                Descuentos
              </Text>
            </HStack>
          ),
        }}
      />
      <Drawer.Screen
        name="News"
        component={Screens.News}
        options={{
          title: "Noticias",
          drawerLabel: ({ focused }) => (
            <HStack alignItems="center" space="2">
              <Icon
                size="lg"
                color={focused ? "primary.700" : "#656566"}
                as={MaterialCommunityIcons}
                name="bell-outline"
              />
              <Text bold color={focused ? "primary.700" : "#656566"}>
                Noticias
              </Text>
            </HStack>
          ),
        }}
      />
      <Drawer.Screen
        name="Videos"
        component={Screens.Videos}
        options={{
          title: "Videos",
          drawerLabel: ({ focused }) => (
            <HStack alignItems="center" space="2">
              <Icon
                size="lg"
                color={focused ? "primary.700" : "#656566"}
                as={MaterialCommunityIcons}
                name="play-circle-outline"
              />
              <Text bold color={focused ? "primary.700" : "#656566"}>
                Videos
              </Text>
            </HStack>
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={Screens.Help}
        options={{
          title: "Ayuda",
          drawerLabel: ({ focused }) => (
            <HStack alignItems="center" space="2">
              <Icon
                size="lg"
                color={focused ? "primary.700" : "#656566"}
                as={MaterialIcons}
                name="help-outline"
              />
              <Text bold color={focused ? "primary.700" : "#656566"}>
                Ayuda
              </Text>
            </HStack>
          ),
        }}
      />
      <Drawer.Screen
        name="FrequentQuestions"
        component={Screens.FrequentQuestions}
        options={{
          title: "FAQ",
          drawerLabel: ({ focused }) => (
            <HStack alignItems="center" space="2">
              <Icon
                size="lg"
                color={focused ? "primary.700" : "#656566"}
                as={MaterialCommunityIcons}
                name="account-question-outline"
              />
              <Text bold color={focused ? "primary.700" : "#656566"}>
                FAQ
              </Text>
            </HStack>
          ),
        }}
      />
      <Drawer.Screen
        name="Contacts"
        component={Screens.Contacts}
        options={{
          title: "Contactos",
          drawerLabel: ({ focused }) => (
            <HStack alignItems="center" space="2">
              <Icon
                size="lg"
                color={focused ? "primary.700" : "#656566"}
                as={MaterialCommunityIcons}
                name="phone-outline"
              />
              <Text bold color={focused ? "primary.700" : "#656566"}>
                Contactos
              </Text>
            </HStack>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const logOut = () => {
    props.navigation.navigate("Login");
  };
  return (
    <Box flex="1">
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Center
        borderTopWidth="0.5"
        borderColor="muted.300"
        height="75"
        position="absolute"
        bottom="0"
        w="100%"
      >
        <Pressable onPress={logOut}>
          <Text bold fontSize="md" color="primary.700">
            Cerrar sesión
          </Text>
        </Pressable>
      </Center>
    </Box>
  );
}
