import React from 'react';
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack";

import { MaterialCommunityIcons } from '@expo/vector-icons';


import Home from '../screens/Home';
import Documents from '../screens/Documents';
import AddDocument from "../screens/AddDocument";
import Profile from '../screens/Profile';
import Tracking from '../screens/Tracking';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainNavigator = ({navigation}) => (
    <Tab.Navigator
        initialRouteName='Documents'
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = "home"
          } else if (route.name === 'Profile') {
            iconName = "account";
          }
          else if (route.name === 'Documents') {
            iconName = "file-document";
          }
          else if (route.name === 'Tracking') {
            iconName = "map-marker";
          }
          if(focused) color = "black";
          else color = "gray";

          return (<MaterialCommunityIcons name={iconName} color={color} size={35} />)
        },
      })}
        tabBarOptions={{
        labelStyle: {
          fontSize: 15
        },
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        }}
    >
        <Tab.Screen name="Home" component={Home} options={{tabBarLabel: "Accueil"}}/>
        <Tab.Screen name="Tracking" component={Tracking} options={{tabBarLabel: "Tracking"}}/>
        <Tab.Screen name="Documents" component={DocumentNavigator} options={{tabBarLabel: "Documents"}}/>
        <Tab.Screen name="Profile" component={Profile} options={{tabBarLabel: "Profil"}}/>
    </Tab.Navigator>
);

const DocumentNavigator = ({}) => (
    <Stack.Navigator>
        <Stack.Screen name="Documents" component={Documents}/>
        <Stack.Screen name="AddDocument" component={AddDocument}/>
    </Stack.Navigator>
);

export default MainNavigator;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });