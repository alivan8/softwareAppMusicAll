import React, { Component } from 'react';
import { StyleSheet,Text, View,Image,TouchableWithoutFeedback,StatusBar,TextInput,SafeAreaView
  ,Keyboard,TouchableOpacity,KeyboardAvoidingViews} from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
      }
    
      onPasswordChange(text) {
        this.props.passwordChanged(text);
      }
    
      onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser(email, password, this.props.navigation);
      }
    
      renderError() {
          if (this.props.error) {
            return (
              <View style={{ backgroundColor: 'white' }}>
                <Text style={styles.errorTextStyle}>
                  {this.props.error}
                </Text>
              </View>
            );
          }
      }
      renderButton() {
        if (this.props.loading) {
          return <Spinner color='white' />;
        }
        return (
          <Text>Login</Text>
        );
      }
      render() {
        return (
          <SafeAreaView style={styles.container}>
             <StatusBar backgroundColor='rgb(32,53,70)' barStyle="light-content" />
            <View style={styles.container} >
            <View style={styles.logoContainer}>
              <Image style={styles.logo}
                  source={require('../images/logo2.png')}>
              </Image>
              <Text style={styles.title}>Account Information</Text>  
            </View>
            <View style={styles.infoContainer}>
            <TextInput style={styles.input}
            onChangeText={this.onEmailChange.bind(this)} 
            value={this.props.email} 
            placeholder="Enter username/email" 
            placeholderTextColor='rgba(255,255,255,0.8)'
            keyboardType='email-address'
            returnKeyType='next'
            autoCorrect={false}
            />
            </View>
          </View>
          </SafeAreaView>
         
        );
      }
    }

    const styles = StyleSheet.create({
      container:{
          flex:1,
          backgroundColor:'rgb(32,53,70)',
          flexDirection:'column',
      },
      logoContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        paddingBottom:10,
      },
      logo:{
        width:128,
        height:56,
      },
      title:{
        color:'#f7c744',
        fontSize:18,
        textAlign:'center',
        marginTop:5,
        opacity:0.9

        
      },
      infoContainer:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        height:200,
        padding:30,
        //backgroundColor:'red'
      },
      input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.2)',
        color:'#FFF',
      }
  })
    
    const mapStateToProps = ({ auth }) => {
      const { email, password, error, loading } = auth;
    
      return { email, password, error, loading };
    };
    
    export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
    