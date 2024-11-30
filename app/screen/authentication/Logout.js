import React from "react";
import { View, Image, Button, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useAuth } from "./Auth";

const Logout = (props) => {
  const { logout } = useAuth();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/modalogo.jpg")}
          style={styles.logo}
        />
      </View>
      <DrawerItemList {...props} />
      <View style={styles.logoutButtonContainer}>
        <Button
          title="Logout"
          onPress={() => {
            logout();
            props.navigation.navigate("Welcome");
          }}
          color="#000"
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  logoutButtonContainer: {
    marginTop: "auto",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    
    width: 130, 
    height: 54,
   
  },
});

export default Logout;
