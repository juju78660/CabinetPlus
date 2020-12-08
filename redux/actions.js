import axios from 'axios';

//
// Action...
//
/*export const onUserLogin = ({email, password}) => {
    return async (dispatch) => {
        try{
            const response = await fetch('http://localhost:8888/?action=authenticate', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'multipart/form-data'
                },
                body: JSON.stringify({
                  email: email,
                  password: password
                })
              }).then((response) => response.json())
              .then((json) => {
                if(json.hasOwnProperty('token')){ // SI LE COMPTE EXISTE BIEN
                  //setToken(json['token']);
                  Alert.alert("CONNECTE");
                  return "CONNECTE";
                 // navigation.navigate('Home');
                }
                else return "NON CONNECTE";
              });
              
              dispatch({type: 'DO_LOGIN', value: response});
        }
        catch (error){
            dispatch({type: 'ON_ERROR', value: error});
        }
    }
}*/

export const onUserLogin = ({email, password}) => {
    return async (dispatch) => {
        try{
            const response = await axios.post('https://netflix-example.herokuapp.com/user/mock-login', {email, password});
            console.log(response);
            dispatch({type: 'DO_LOGIN', payload: response.data});
        }
        catch (error){
            dispatch({type: 'ON_ERROR', payload: error});
        }
    }
}

export const onFetchProduct = () => {
    return async (dispatch) => {
        try{
            const response = {
                data: [
                    {name: "Macbook", price: "1600$"},
                    {name: "Iphone", price: "1400$"},
                    {name: "Ipod", price: "300$"},
                ]
            }
            dispatch({type: 'FETCH_PRODUCT', payload: response.data});
        }
        catch (error){
            dispatch({type: 'ON_ERROR', payload: error});
        }
    }
}
