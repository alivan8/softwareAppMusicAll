import AsyncStorage from '@react-native-community/async-storage';
import {NavigationActions} from 'react-navigation';
import {LOGIN_URL,USER_URL} from '../services/URLs';
import {OAUTH_CLIENT_ID,OAUTH_CLIENT_SECRET} from '../services/Auth';

import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    CLOSE_ERROR,
} from './types';


// correo electronico cambiado 
export const emailChanged =(text)=>{return {type:EMAIL_CHANGED,payload:text};};
export const closeError=()=>{return{type:CLOSE_ERROR};};
// password cambiado
export const passwordChanged =(text)=>{return{type:PASSWORD_CHANGED,payload:text};};
// login del usuario
export const loginUser=(email,password,navigation)=>{
    return (dispatch)=>{
        dispatch({type:LOGIN_USER});

        return fetch(
            LOGIN_URL,
            {
                method:'POST',
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({
                    grant_type:'password',
                    client_id:OAUTH_CLIENT_ID,
                    client_secret:OAUTH_CLIENT_SECRET,
                    username:email,
                    password:password,
                    scope:''
                })

        })
        .then(response=>response.json())
        .then(json=>{
            console.log('json:',email,json)
            if(json.hasOwnProperty('error'))
                loginUserFail(dispatch);
            else{
                loginUserSuccess(dispatch, json, navigation);
            }
        })
        .catch((error)=>{
            console.log('ERROR', error)
            loginUserFail(dispatch);
        })

    }
}

export const logOutUser = (navigation) => {
    return async (dispatch) => {
      await AsyncStorage.clear();
      navigation.navigate('Auth');
    }
  }

  const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
  };

  const loginUserSuccess = async (dispatch, json, navigation) => {
    await AsyncStorage.setItem('token_type', json.token_type);
    await AsyncStorage.setItem('access_token', json.access_token);
    dispatch({
      type: LOGIN_USER_SUCCESS,
    });
    navigation.navigate('App');
  };