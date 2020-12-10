import axios from 'axios';

//
// Action...
//
export const onUserLogIn = ({email, password}) => {
    return async (dispatch) => {
        try{
            dispatch({type: 'ON_ERROR', payload: ""});
            const response = await axios.post('http://localhost:8888/?action=authenticate', {email, password});
            dispatch({type: 'DO_LOGIN', payload: response.data});
        }
        catch (error){
            if(error == "Error: Network Error") dispatch({type: 'ON_ERROR', payload: "Serveur inaccessible ! Etes vous connecté à internet ?"});
            else {
                dispatch({type: 'ON_ERROR', payload: "Email/mot de passe incorrect"});
            }
        }
    }
}

export const onUserLogOut = ({}) => {
    return async (dispatch) => {
        try{
            dispatch({type: 'DO_LOGOUT'});
        }
        catch (error){
            dispatch({type: 'ON_ERROR', payload: error});
        }
    }
    
}

/* export const onFetchProduct = () => {
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
} */
