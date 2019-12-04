import AsyncStorage from '@react-native-community/async-storage';
import {StackActions,NavigationActions} from 'react-navigation';
import {Toast} from 'native-base';
import {
    CARS_FETCH,
    CARS_FETCH_SUCCESS,
    CAR_CREATE,
    CAR_CREATE_SUCCESS,
    CAR_UPDATE,
    CAR_UPDATE_SUCCESS,
    CAR_DELETE,
    CAR_DELETE_SUCCESS,
} from './types';
import {CARS_FETCH_URL} from '../services/URLs';

export const carCreate =(name,color,navigation)=>{
//
   return async (dispatch)=>{
    dispatch({type:CAR_CREATE});
      const accesToken = await AsyncStorage.getItem('access_token');
      const tokenType = await AsyncStorage.getItem('token_type');

  return fetch(CARS_FETCH_URL,{
          method:'POST',
          headers:{'Content-type':'application/json','Authorization':tokenType+' '+accesToken},
          body:JSON.stringify({name,color})
      })  
      .then(response =>response.json())
      .then(json =>{
          console.log('json cAR:',json);
          dispatch({type:CAR_CREATE_SUCCESS});
          Toast.show({
              text:'added successfully',
              type:'success'
          });
          const resetAction =  StackActions.reset({
                index:0,
                action:[
                    NavigationActions.navigate({routeName:'Home'}),
                ],
          });
          navigation.dispatch(resetAction);

      })
      .catch((error)=>{
          console.log('ERROR tokenType',error);
          Toast.show({
            text:'A problem ocurred',
            type:'danger'

          });
      })
   };

};

export const carUpdate = (id,name,color,navigation)=>{
    return async (dispatch)=>{
        dispatch({type:CAR_UPDATE});
        const accessToken = await AsyncStorage.getItem('access_token');
        const tokenType = await AsyncStorage.getItem('token_type');
        return fetch(CARS_FETCH_URL+id,{
            method:'PUT',
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json',
                'Authorizat(ion':tokenType+' '+accessToken
            },
            body:JSON.stringify({name,color})
        })
        .then(response =>response.json())
        .then(json=>{
            console.log('json update car:'+json);
            dispatch({type:CAR_UPDATE_SUCCESS});
            Toast.show({
                text:'Updated successfuly',
                type:'success'
            });
            const resetAction = StackActions.reset({
               index:0,
               action:[
                   NavigationActions.navigate({routeName:'Home'})
               ], 
            });
            navigation.dispatch(resetAction);
        })
        .catch((error)=>{
            console.log('ERROR',error);
            Toast.show({
                text:'A problem ocurred',
                type:'danger'
            });
        })
    };
};

export const carsFetch =()=>{
    return async(dispatch)=>{
        dispatch({type:CARS_FETCH});
        try {
            let response = await fetch(CARS_FETCH_URL);
            const cars = await response.json();
            console.log('cars.data:'+cars.data);
            dispatch({type:CARS_FETCH_SUCCESS,payload:cars.data});
        } catch (e) {
            console.log(e)
        }
    };
} ;

export const carDelete = (id,navigation)=>{
    return async (dispatch)=>{
        dispatch({type:CAR_DELETE});
        const accessToken = await AsyncStorage.getItem('token_type');
        const tokenType = await AsyncStorage.getItem('token_type');

        return fetch(CARS_FETCH_URL+id,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json',
                'Authorization':tokenType+' '+accessToken
            },
            body:JSON.stringify({id})
        })
        .then(response=>{
            console.log('respponse carDelete'+response);
            dispatch({type:CAR_DELETE_SUCCESS});
            Toast.show({
                text:'Deleted succefuly',
                type:'success'
            });
            const resetAction = StackActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({routeName:'Home'}),
                ],
            });
            navigation.dispatch(resetAction);

        })
        .catch((error) => {
            console.log('ERROR', error);
            Toast.show({
                  text: 'A problem occurred',
                  type: 'danger'
            });
          })
      };
    };
    