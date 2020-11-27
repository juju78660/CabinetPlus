import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AsyncStorage } from 'react-native';


import SignIn from './screens/SignIn';
import CreateAccount from './screens/CreateAccount';
import Profile from './screens/Profile';
import Home from './screens/Home';
import Splash from './screens/Splash';
import AuthNavigator from './screens/AuthNavigation';
import ForgetPassword from './screens/ForgetPassword';


const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

async function getToken(){
  AsyncStorage.getItem('userToken').then((token) => {
    console.log("TOKEN:" + token);
    userToken = token;
    return token;
  });
}


getData = async () => {
  try {
    const value = await AsyncStorage.getItem('userToken')
    if(value !== null) {
      console.log("MDR" + value);
      return value;
    }
  } catch(e) {
    console.log(e);
  }
}

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  getData();

  React.useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false);
    }, 5000)
  }, []);

  if(isLoading){
    return <Splash/>;
  }

  return (
    <NavigationContainer>
      {userToken != null ? (
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={Home}/>
          <Tabs.Screen name="Profile" component={Profile}/>
        </Tabs.Navigator>
      ) : 
      (
        <Stack.Navigator
          initialRouteName='SignIn'
          screenOptions={{
            gestureEnabled: true,
            headerBackTitleVisible: false,
            headerShown: false
          }}>
          <Stack.Screen name="AuthNavigator" component={AuthNavigator}/>
          <Stack.Screen name="SignIn" component={SignIn}/>
          <Stack.Screen name="CreateAccount" component={CreateAccount}/>
          <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};