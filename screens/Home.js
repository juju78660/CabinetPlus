import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';


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
  

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );
  
const HomeStack = createStackNavigator();

const Home = () => (
  <ScreenContainer>
    <Text>Home Screen</Text>
    <Button title="Sign Up" onPress={() => alert('todo')} />
  </ScreenContainer>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home}/>
  </HomeStack.Navigator>
);

export default HomeStackScreen;