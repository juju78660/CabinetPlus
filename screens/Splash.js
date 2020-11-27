import React from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator, StatusBar, AsyncStorage } from "react-native";


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
  
async function getToken(){
  console.log("[");
  AsyncStorage.getItem('userToken').then((token) => {
    console.log("TOKEN:" + token);
  });
  console.log("]");
}

const Splash = () => (
    <ScreenContainer>
      <Text>Chargement en cours...</Text>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </ScreenContainer>
);

export default Splash;