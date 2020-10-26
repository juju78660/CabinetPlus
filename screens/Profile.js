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
  

const ProfileStack = createStackNavigator();

const Profile = () => (
    <ScreenContainer>
        <Text>Profile Screen</Text>
        <Button title="Drawer" onPress={() => alert('todo')} />
        <Button title="Sign Out" onPress={() => alert('todo')} />
    </ScreenContainer>
);

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={Profile}/>
    </ProfileStack.Navigator>
);

export default ProfileStackScreen;