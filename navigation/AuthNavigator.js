import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';


import SignIn from '../screens/SignIn';
import CreateAccount from '../screens/CreateAccount';
import ForgetPassword from '../screens/ForgetPassword';



const Stack = createStackNavigator();


const AuthNavigator = () => (
  <NavigationContainer style={styles.container}>
    <Stack.Navigator style={styles.container}
      initialRouteName='SignIn'
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: false,
        gestureEnabled: true
      }}>
      <Stack.Screen name="SignIn" component={SignIn}/>
      <Stack.Screen name="CreateAccount" component={CreateAccount}/>
      <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
    </Stack.Navigator>
    </NavigationContainer>
);

export default AuthNavigator;

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
