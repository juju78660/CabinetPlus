import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );
  
export default function SignIn({ navigation}) {
  return (
    <ScreenContainer>
      <TextInput></TextInput>
      <Text>TOKEN</Text>
      <Text>Home Screen</Text>
      <Button onPress={() => disconnect()} title="DISCONNECT"></Button>
  </ScreenContainer>
  );
};

async function getToken(){
  AsyncStorage.getItem('userToken').then((token) => {
    console.log("TOKEN:" + token);
  });
}

async function disconnect(){
  console.log("disconnect");
  try {
    await AsyncStorage.removeItem("userToken");
    console.log("ici");

  } catch (error) {
    console.log(error);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  input: {
    width:"90%",
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    color:"#888"
  },
});