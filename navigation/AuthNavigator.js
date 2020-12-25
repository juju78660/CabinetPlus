import React from 'react';
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";


import SignIn from '../screens/SignIn';
import CreateAccount from '../screens/CreateAccount';
import ForgetPassword from '../screens/ForgetPassword';

const Stack = createStackNavigator();

const AuthNavigator = ({navigation}) => (
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
);

export default AuthNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
