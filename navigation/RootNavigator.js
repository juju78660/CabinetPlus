import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';

//REDUX
/*import { connect } from 'react-redux';
import { onUserLogOut, onUserLogIn, onFetchProduct } from '../redux/actions';
*/

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

import "../API/firebaseConfig";
import * as Firebase from "firebase/compat";

import {
  Provider as PaperProvider,
  ActivityIndicator,
} from 'react-native-paper';

const RootNavigator = (props) => {
  //const {userReducer, onUserLogIn, onUserLogOut, onFetchProduct} = props;

  //const {currentUser, products, appError} = userReducer;

  const [userLogged, setUserLogged] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setUserLogged(user ? true : false);
      setIsLoading(false);
      setUserProfile(user);
    });
  }, []);

  if (isLoading) {
    // Checking if already logged in
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator animating={true} size="large" />
        </View>
    );
  }

  return (
    <NavigationContainer style={styles.container}>
      {/*<MainNavigator />*/}
      {(userLogged != false) ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
/*
const mapStateToProps = (state) => ({
  userReducer : state.userReducer,
});

const RootNavigatorScreen = connect(mapStateToProps, { onUserLogIn, onUserLogOut, onFetchProduct })(RootNavigator);

export default RootNavigatorScreen;
*/
export default RootNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});