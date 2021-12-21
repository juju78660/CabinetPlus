import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView, TouchableOpacity, Alert } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AddDocument from "../screens/AddDocument";

//REDUX
/*
import { connect } from 'react-redux';
import { onUserLogOut, onUserLogIn } from '../redux/actions';
*/
const ScreenContainer = ({ children }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

const DocumentView = ({title, date, fileLink}) => (
  <View style={styles.documentScrollElement}>
    <Text style={{flex: 1, paddingLeft: 5}}> {title}</Text>
    <Text style={{flex: 1}}> {date} </Text>
    <TouchableOpacity onPress={() => Alert.alert("Affichage document " + title)} >
      <MaterialCommunityIcons name='file-eye-outline' size={30} style={styles.viewDocumentButton}/>
    </TouchableOpacity>
  </View>
);

const Documents = (props) => {
  //const {userReducer} = props;
  const { navigate } = props.navigation;

  //const {currentUser, products, appError} = userReducer;


  return (
    <ScreenContainer>
        <Text style={{fontSize:25, alignSelf: 'center'}}>Liste des documents transmis</Text>

        <Text style={{fontSize:20, alignSelf: 'center', paddingTop: 10}}>Notes de frais</Text>
        <ScrollView style={[styles.documentsScroll]}>
          <DocumentView title="Achat ordinateur" date= '11/09/2020' fileLink= 'AchatOrdi1'></DocumentView>
          <DocumentView title="Voyage d'affaire" date= '23/12/2020' fileLink= 'VoyageAffaure1'></DocumentView>
        </ScrollView>

        <Text style={{fontSize:20, alignSelf: 'center', paddingTop: 10}}>Indemnités kilométriques</Text>
        <ScrollView style={styles.documentsScroll}>
          <DocumentView title="McDo" date= '16/10/2020' fileLink= 'Indemnite1'></DocumentView>
        </ScrollView>

        <TouchableOpacity onPress={() => navigate("AddDocument")} style={styles.importDocumentButton}>
          <Text style={styles.importDocumentButtonText}>Ajouter un document</Text>
        </TouchableOpacity>
    </ScreenContainer>
  );
};

const mapStateToProps = (state) => ({
  userReducer : state.userReducer,
});

//const DocumentsScreen = connect(mapStateToProps, {})(Documents);

export default Documents;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  documentsScroll: {
    flex: 1,
    paddingHorizontal: 5,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor:"#eeeeee",
  },
  documentScrollElement: {
    alignItems: 'center',
    borderWidth: 1,
    margin: 1,
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    borderRadius: 5,
    width:"100%",
    height: 40
  },
  viewDocumentButton: {
    paddingRight: 5
  },
  importDocumentButton: {
    width:"90%",
    borderRadius:25,
    borderWidth: 1,
    height:50,
    alignSelf: "center",
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },
  importDocumentButtonText:{
    fontSize:18
  }
});