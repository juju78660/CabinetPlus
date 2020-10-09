import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import * as firebase from 'firebase';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const firebaseConfig = {
  apiKey: "AIzaSyAcaFMwk7qqGKzDFj9Nvc36UY1st3fzMXg",
  authDomain: "cabinetplus-da986.firebaseapp.com",
  databaseURL: "https://cabinetplus-da986.firebaseio.com",
  projectId: "cabinetplus-da986",
  storageBucket: "cabinetplus-da986.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id"
};

firebase.initializeApp(firebaseConfig);

function HomeScreen(){
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Open Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

function MileageAllowancesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MileageAllowances!</Text>
    </View>
  );
}

function ExpenseAccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ExpenseAccount!</Text>
    </View>
  );
}


function InformationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Information!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profil!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            switch(route.name){
              case 'Accueil':
                iconName = focused
                ? 'ios-home'
                : 'ios-home';
                break;
              case 'Trajets':
                iconName = focused
                ? 'ios-car'
                : 'ios-car';
                break;
              case 'Note frais':
                iconName = focused
                ? 'ios-document'
                : 'ios-document';
                break;
              case 'Information':
                iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle';
                break;
              case 'Profil':
                iconName = focused
                ? 'ios-person'
                : 'ios-person';
                break;
            }
            return <Ionicons name={iconName} size={30} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
        // <Tab.Screen name="Information" component={InformationScreen} />
      >
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Trajets" component={MileageAllowancesScreen} />
        <Tab.Screen name="Note frais" component={ExpenseAccountScreen} />
        <Tab.Screen name="Profil" component={ProfileScreen} options={{ tabBarBadge: 3 }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  }
});

export default App;