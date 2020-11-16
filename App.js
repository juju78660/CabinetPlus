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

async function getToken() {
  try {
    let userToken = await AsyncStorage.getItem("userData");
    console.log(userToken);
    let userTokenData = JSON.parse(userToken);
    return userTokenData;
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  let userToken2 = 0;

  AsyncStorage.getItem('userToken').then((token) => {
    console.log("TOKEN:" + token);
  });
  

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("zzz");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("zzz");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    }
  }, []);

  React.useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }, []);

  if(isLoading){
    return <Splash/>;
  }

  return (
    <NavigationContainer>
      
      {userToken2 != 0 ? (
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={Home}/>
          <Tabs.Screen name="Profile" component={Profile}/>
        </Tabs.Navigator>
      ) : (
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