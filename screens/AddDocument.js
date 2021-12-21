import React, { useState, useEffect } from 'react';
import { Button, Image, Text, TextInput, View, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

//var cloudinary = require('cloudinary').v2;
/*cloudinary.config({
    cloud_name: 'dycbkurei',
    api_key: '874947273468776',
    api_secret: 'ye8xo7PbPwWV9Y8LfKNTlaWaCg8'
  });*/

export default function ImagePickerExample() {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const [valueName, onChangeTextName] = useState('');
    const [valueComment, onChangeTextComment] = useState('');
    const [valueDate, onChangeTextDate] = useState('');
    const [image, setImage] = React.useState();

    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { cameraPermission } = await ImagePicker.requestCameraPermissionsAsync();
            }
        })();
    }, []);

    const pickImageCamera= async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1
        });

        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    
    const pickImageRoll = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
            alert(JSON.stringify(result));
        }
    };

    function formVerification() {
        if(nameVerification()){
            if(commentVerification()){
                if(image) {
                    Alert.alert(image);
                }
                else setError("Aucune image sélectionnée")
            }
            else setError("Vous devez ajouter un commentaire à votre note de frais")
        }
        else setError("Vous devez nommer votre note de frais")
    };

    function nameVerification() {
        if(valueName != null && valueName.length >= 4) return true;
        else return false;
    }

    function commentVerification() {
        if(valueComment != null && valueComment.length >= 4) return true;
        else return false;
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Nom</Text>
                <TextInput
                    style={styles.input}
                    placeholder='name'
                    placeholderTextColor = 'lightgrey'
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={text => onChangeTextName(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Commentaire</Text>
                    <TextInput
                    style={styles.input}
                    placeholder='comment'
                    placeholderTextColor = 'lightgrey'
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={text => onChangeTextComment(text)}
                    />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Date</Text>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    style={{width:100, alignSelf:'center'}}
                />
            </View>
            <Text style={{marginTop:10, fontSize:20}}>Importer une image</Text>
            <View style={{flexDirection: "row", alignContent:"space-around"}}>
                <View style={{backgroundColor:"#cccccc", width:40, height:40, alignItems:"center",justifyContent:"center"}}>
                    <TouchableOpacity onPress={pickImageRoll}>
                        <MaterialCommunityIcons name='image' size={35} style={styles.inputImage}/>
                    </TouchableOpacity>
                </View>
                
                <View style={{marginLeft:10, backgroundColor:"#cccccc", width:40, height:40, alignItems:"center",justifyContent:"center"}}>
                    <TouchableOpacity  onPress={pickImageCamera}>
                        <MaterialCommunityIcons name='camera' size={35} style={styles.inputImage}/>
                    </TouchableOpacity>
                </View>
            </View>

            {image && <Image source={{ uri: image }} style={styles.thumbnail} />}
            <TouchableOpacity onPress={() => formVerification()} style={styles.importDocumentButton}>
                <Text style={styles.importDocumentButtonText}>Ajouter le document</Text>
            </TouchableOpacity>

            {/* ERROR */}
            {(error!== "") ? (<Text style={styles.errorText}>{error}</Text>) : (<Text style={styles.errorText}></Text>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain"
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
    input:{
        fontSize: 20,
        width:200,
        borderWidth: 1,
        margin: 10,
        alignSelf: "center",
        alignItems:"center",
        justifyContent:"center",
    },
    inputText:{
        fontSize: 18,
        margin: 10,
        alignSelf: "center",
        alignItems:"center",
        justifyContent:"center",
    },
    inputContainer:{
        height: 45,
        flexDirection: 'row',
        marginLeft:10,
        marginRight:10,
        marginTop:10,
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
    },
    errorText:{
        fontWeight:'bold',
        fontSize:15,
        color:'red',
        height:20
    }
})