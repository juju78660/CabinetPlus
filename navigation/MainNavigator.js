import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignIn from '../screens/SignIn';
import Profile from '../screens/Profile';

  
const Tabs = createBottomTabNavigator();

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );

const MainNavigator = () => (
    <ScreenContainer>
        <Tabs.Navigator>
            <Tabs.Screen name="SignIn" component={SignIn}/>
            <Tabs.Screen name="Profile" component={Profile}/>
        </Tabs.Navigator>
    </ScreenContainer>
);

export default MainNavigator;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    input: {
      width:"80%",
      fontSize: 20,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'grey',
      marginVertical: 10,
      color:"#888"
    },
  });