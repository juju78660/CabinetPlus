import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


//REDUX
import { connect } from 'react-redux';
import { onUserLogOut, onUserLogIn, onFetchProduct } from '../redux/actions';


const ScreenContainer = ({ children }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

const Profile = (props) => {
  const {userReducer, onUserLogIn, onUserLogOut} = props;

  const {currentUser} = userReducer;
  console.log(currentUser);
  return (
    <ScreenContainer>
      <Text style={{fontSize:40, alignSelf: 'center'}}>Profil</Text>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end', width:"100%"}}>
        <TouchableOpacity onPress={() => onUserLogOut({})} >
          <MaterialCommunityIcons name='logout' size={40}/>
        </TouchableOpacity>
      </View>
      <Text>{currentUser.username}</Text>
    </ScreenContainer>
  );
};

const mapStateToProps = (state) => ({
  userReducer : state.userReducer,
});

const ProfileScreen = connect(mapStateToProps, { onUserLogIn, onUserLogOut, onFetchProduct })(Profile);

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});