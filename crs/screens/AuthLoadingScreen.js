
import React, { Component } from 'react'
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';




export default class AuthLoadingScreen extends Component{
    constructor(props){
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async()=>{
        try { 
        const accessToken = await AsyncStorage.getItem('access_token');
        console.log('accessToken:'+JSON.stringify(accessToken));
        if(accessToken){
            this.props.navigation.navigate('App');
            console.log('entroa aca');
        }else{
            this.props.navigation.navigate('Auth');
        }
      
        console.log('paso hasta el final');
            
        } catch(e) {
                console.log(e);
        }
    };


    render() {
        return (
             <View style={styles.container}>
                 <ActivityIndicator/>
                 <StatusBar barStyle="default"/>
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
