import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, SafeAreaView, Alert} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Firebase from "firebase/compat";


//REDUX
/*
import { connect } from 'react-redux';
import { onUserLogOut, onUserLogIn, onFetchProduct } from '../redux/actions';
*/

const ScreenContainer = ({ children }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

const Profile = (props) => {
  //const {userReducer, onUserLogIn, onUserLogOut} = props;
    const { currentUser } = Firebase.auth();
  //const {currentUser} = userReducer;

    function logOut() {
        try {
            Firebase.auth().signOut();
        } catch (err) {
            Alert.alert('There is something wrong!', err.message);
        }
    }

    //console.log(currentUser);
  return (
    <ScreenContainer>
      <Text style={{fontSize:40, alignSelf: 'center'}}>Profil</Text>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end', width:"100%"}}>
        <TouchableOpacity onPress={() => logOut()} >
          <MaterialCommunityIcons name='logout' size={40}/>
        </TouchableOpacity>
      </View>
      <Text>{currentUser ? currentUser.email : 'Anonyme'}</Text>
    </ScreenContainer>
  );
};

const mapStateToProps = (state) => ({
  userReducer : state.userReducer,
});

//const ProfileScreen = connect(mapStateToProps, { onUserLogIn, onUserLogOut, onFetchProduct })(Profile);

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});