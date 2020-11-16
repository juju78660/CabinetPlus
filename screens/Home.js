import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );
  
const HomeStack = createStackNavigator();

const Home = () => (
  <ScreenContainer>
    <Text>Home Screen</Text>
    <Button onPress={() => disconnect()} title="DISCONNECT"></Button>
  </ScreenContainer>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home}/>
  </HomeStack.Navigator>
);

async function disconnect(){
  try {
    const value = await AsyncStorage.getItem('userToken');
    if (value !== null) {
      console.log(value);
    }
    else console.log("PAS DE TOKEN");
  } catch (error) {
    console.log(error);
  }

  try {
    await AsyncStorage.removeItem("userToken");
    console.log("ici");

  } catch (error) {
    console.log(error);
  }

  try {
    const value = await AsyncStorage.getItem('userToken');
    if (value !== null) {
      console.log(value);
    }
    else console.log("PAS DE TOKEN");
  } catch (error) {
    console.log(error);
  }
}


export default HomeStackScreen;

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
  }
});