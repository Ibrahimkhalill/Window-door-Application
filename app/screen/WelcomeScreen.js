import React from "react";


import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";


function WelcomeScreen({ navigation }) {
  return (
    <View
      style={styles.container}
      className="bg-background  flex-1 justify-center items-center"
    >
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("UserLogin")}
          className=" p-4  shadow-lg rounded-lg flex items-center justify-center"
        >
          <Image
            className="w-[100px] h-[100px]"
            source={require("../assets/user.png")}
          />
          <Text className="text-black text-lg font-medium mt-2">User</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AdminLogin")} className=" p-4 shadow-lg rounded-lg flex items-center justify-center">
          <Image
            className="w-[130px] h-[100px]"
            source={require("../assets/admin-panel.png")}
          />
          <Text className="text-black font-medium text-lg mt-2">Admin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  }
});

export default WelcomeScreen;
