
import React, { Component } from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';




export default class AuthLoadingScreen extends Component{
    constructor(props){
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async()=>{
        const accessToken = await AsyncStorage.getItem('access_token');
        this.props.navigation.navigate(accessToken?'../App':'Auth');
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
