import React from "react";

// REDUX
import { Provider } from 'react-redux';
import { store, appPersist } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

import AuthNavigator from './navigation/AuthNavigator';
import MainNavigator from './navigation/MainNavigator';

import HomeScreen from './screens/Home';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={appPersist}>
        < HomeScreen />
      </PersistGate>
    </Provider>
  );
  /*
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  this.state = {
    isLoadingComplete: false,
    isAuthenticationReady: false,
    isAuthenticated: false,
  };

  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
  }

  
  return (
    <Provider store={store}>
      <NavigationContainer>
        {(!this.state.isAuthenticated) ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </Provider>
  );*/
};