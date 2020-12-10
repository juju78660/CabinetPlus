import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';


import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();


const MainNavigator = ({navigation}) => (
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = "home"
      } else if (route.name === 'Profile') {
        iconName = "account";
      }

      // You can return any component that you like here!
      <MaterialCommunityIcons name={iconName} color={color} size={20} />
    },
  })}
  tabBarOptions={{
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
  }}
>
    <Tab.Screen name="Home" component={Home} options={{
            tabBarLabel: "Accueil",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}/>
    <Tab.Screen name="Profile" component={Profile} options={{
            tabBarLabel: "Profil",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}/>
  </Tab.Navigator>
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