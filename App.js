
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { StyleSheet, Platform } from "react-native";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import UserLogin from "./app/screen/authentication/UserLogin";
import AdminLogin from "./app/screen/authentication/AdminLogin";
import Home from "./app/screen/admin/Home";
import AllCustomer from "./app/screen/admin/AllCustomer";
import CreateNewUser from "./app/screen/admin/CreateNewUser";
import Profile from "./app/screen/admin/Profile";
import Glass from "./app/screen/admin/Glass";
import MosquitoNetting from "./app/screen/admin/MosquitoNetting";
import VatInstallation from "./app/screen/admin/VatInstallation";
import MailData from "./app/screen/admin/MailData";
import PhoneData from "./app/screen/admin/PhoneData";
import { AuthProvider, useAuth } from "./app/screen/authentication/Auth";
import Logout from "./app/screen/authentication/Logout";
import UserDashboard from "./app/screen/user/UserDashboard";
import MyCustomer from "./app/screen/user/MyCustomer";
import AddCustomer from "./app/screen/user/AddCustomer";
import NewQuotation from "./app/screen/user/NewQuotation";
import WindowDoor from "./app/screen/user/WindowDoor";
import QuotationReport from "./app/screen/user/QuotationReport";
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AdminDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "#fff",
      }}
      drawerContent={(props) => <Logout {...props} />}
    >
      <Drawer.Screen
        options={{ title: "Home" }}
        name="Admin_Dashboard"
        component={Home}
      />
      <Drawer.Screen
        options={{ title: "All Customer" }}
        name="all_customer"
        component={AllCustomer}
      />
      <Drawer.Screen
        options={{ title: "User" }}
        name="create_new_user"
        component={CreateNewUser}
      />
      <Drawer.Screen
        options={{ title: "Profile" }}
        name="profile"
        component={Profile}
      />
      <Drawer.Screen
        options={{ title: "Glass" }}
        name="glass"
        component={Glass}
      />
      <Drawer.Screen
        options={{ title: "Mosquito Netting" }}
        name="mosquito_netting"
        component={MosquitoNetting}
      />
      <Drawer.Screen
        options={{ title: "Vat & Installation" }}
        name="vat_installation"
        component={VatInstallation}
      />
      <Drawer.Screen
        options={{ title: "Mail Data" }}
        name="mail_data"
        component={MailData}
      />
      <Drawer.Screen
        options={{ title: "Phone Data" }}
        name="phone_data"
        component={PhoneData}
      />
    </Drawer.Navigator>
  );
}

function UserDrawer() {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#fff",
        }}
        drawerContent={(props) => <Logout {...props} />}
      >
        <Drawer.Screen
          options={{ title: "User Dashboard" }}
          name="User_Dashboard"
          component={UserDashboard}
        />
        <Drawer.Screen
          options={{ title: "My Customer" }}
          name="my_customer"
          component={MyCustomer}
        />
        <Drawer.Screen
          options={{ title: "Add Customer" }}
          name="add_customer"
          component={AddCustomer}
        />
        <Drawer.Screen
          options={{ title: "New Quotation" }}
          name="new_quotation"
          component={UserStack}
        />
        <Drawer.Screen
          options={{ title: "Quotation Report" }}
          name="quotation_report"
          component={QuotationReport}
        />
      </Drawer.Navigator>
    </>
  );
}
function UserStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="new_quotation"
    >
      <Stack.Screen name="new_quotation" component={NewQuotation} />
      <Stack.Screen name="WindowDoor" component={WindowDoor} />
    </Stack.Navigator>
  );
}
function AppContent() {
  const { isLoggedIn, role } = useAuth();

  if (isLoggedIn) {
    return role === "admin" ? (
      <>
        <AdminDrawer />
      </>
    ) : (
      <UserDrawer />
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          options={{ title: "Home", headerShown: false }}
          name="WELCOME"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ title: "Admin Login" }}
          name="AdminLogin"
          component={AdminLogin}
        />
        <Stack.Screen
          options={{ title: "User Login" }}
          name="UserLogin"
          component={UserLogin}
        />
      </Stack.Navigator>
    );
  }
}

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider style={styles.container}>
        <NavigationContainer>
          <AppContent />
          {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WindowDoor" component={WindowDoor} />
          </Stack.Navigator> */}
        </NavigationContainer>
        <StatusBar style="light" backgroundColor="gray" />
      </SafeAreaProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: Platform.OS === "white" ? StatusBar.currentHeight : 0,
  },
});
