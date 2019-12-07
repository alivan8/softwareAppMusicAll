import React, { Component } from 'react';
import {TextInput, Alert,StyleSheet,KeyboardAvoidingView,Easing,ActivityIndicator,TouchableOpacity, View,Image,Dimensions,Animated} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Body, Button, Card, CardItem, Container, Content, Item, Input, Spinner, Text} from 'native-base';
import {Actions, ActionConst} from 'react-native-router-flux';

import { emailChanged, passwordChanged, loginUser } from '../actions';
import Logo from '../../componentes/loginDesign/components/Logo';
import Form from '../../componentes/loginDesign/components/Form';
import Wallpaper from '../../componentes/loginDesign/components/Wallpaper';
import ButtonSubmit from '../../componentes/loginDesign/components/ButtonSubmit';
import UserInput from '../../componentes/loginDesign/components/UserInput';
import SignupSection from '../../componentes/loginDesign/components/SignupSection';
import usernameImg from '../../componentes/loginDesign/images/username.png';
import passwordImg from '../../componentes/loginDesign/images/password.png';
import eyeImg from '../../componentes/loginDesign/images/eye_black.png';
import spinner from '../../componentes/loginDesign/images/loading.gif';

const MARGIN = 40;
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      isLoading: false,
    };
    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
    this.showPass = this.showPass.bind(this);
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      this._onGrow();
    }, 2000);

    setTimeout(() => {
      Actions.secondScreen();
      this.setState({isLoading: false});
      this.buttonAnimated.setValue(0);
      this.growAnimated.setValue(0);
    }, 2300);
  }

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

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
      <Text></Text>
    );
  }
      render() {
        const changeWidth = this.buttonAnimated.interpolate({
          inputRange: [0, 1],
          outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
        });
        const changeScale = this.growAnimated.interpolate({
          inputRange: [0, 1],
          outputRange: [1, MARGIN],
        });
        return (
          <Wallpaper>
             <Logo />
             
             <KeyboardAvoidingView behavior="padding" style={styles.container}>
                  <View style={styles.inputWrapper}>
                    <Image  style={styles.inlineImg} />
                    <TextInput
                      onChangeText={this.onEmailChange.bind(this)}
                      value={this.props.email} 
                      placeholder="Email"
                      style={styles.input}
                      //source={usernameImg}
                      returnKeyType='done'
                      //autoCorrect = 'false
                      autoCapitalize='none'
                      returnKeyType='done'
                      placeholderTextColor="white"
                      underlineColorAndroid="transparent"
                    />
                    
                  
                     <TextInput
                     secureTextEntry
                     onChangeText={this.onPasswordChange.bind(this)}
                     value={this.props.password} placeholder="Password"
                     style={styles.inputPassword}
                      placeholder="Password"
                      returnKeyType='done'
                      autoCapitalize='none'
                     // autoCorrect={false}
                      placeholderTextColor="white"
                      underlineColorAndroid="transparent"
                    />

                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.btnEye}
                      onPress={this.showPass}>
                      <Image source={eyeImg} style={styles.iconEye} />
                    </TouchableOpacity>
                    <Button 
                    block onPress={this.onButtonPress.bind(this)}
                    style={{
                      alignContent:'center',
                      justifyContent:'center',
                      margin:20,
                      borderRadius:20
                    }
                      
                    }
                    >
                     {this.renderButton()}
                     <Text>LOGIN</Text>
                    
                    </Button>
                  </View>
                  
                  
              </KeyboardAvoidingView>
              <SignupSection />

              
            {/**  <View style={styles.containerTouch}>
                  <Animated.View style={{width: changeWidth}}>
                    <TouchableOpacity
                      style={styles.buttonTouch}
                      onPress={this.onButtonPress.bind(this)} 
                      
                      activeOpacity={1}>
                        {this.renderButton()}
                      {this.state.isLoading ? (

                        <Image source={spinner} style={styles.imageTouch} 
                        
                        />
                      ) : (
                        <Text style={styles.textTouch}>LOGIN</Text>
                      )}
                    </TouchableOpacity>
                    <Animated.View
                      style={[styles.circleTouch, {transform: [{scale: changeScale}]}]}
                    />
                  </Animated.View>
               </View>
                */}
              </Wallpaper>
        );
      }
    }

    UserInput.propTypes = {
      source: PropTypes.number.isRequired,
      placeholder: PropTypes.string.isRequired,
      secureTextEntry: PropTypes.bool,
      autoCorrect: PropTypes.bool,
      autoCapitalize: PropTypes.string,
      returnKeyType: PropTypes.string,
    };
    const DEVICE_WIDTH = Dimensions.get('window').width;
    const DEVICE_HEIGHT = Dimensions.get('window').height;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'stretch',
      },
      btnEye: {
        position: 'absolute',
        top: 55,
        right: 28,
      },
      iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
      },
      errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
      }, input: {
        backgroundColor: '#27276b',
        opacity:0.30,
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff',
      },
      inputPassword: {
        backgroundColor: '#27276b',
        opacity:0.30,
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff',
        margin:10
      },
      inputWrapper: {
        flex: 1,
      },
      inlineImg: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 35,
        top: 9,
      },
      containerTouch: {
        flex: 1,
        top: -95,
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      buttonTouch: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8051c2',
        height: MARGIN,
        width:300,
        borderRadius: 20,
        zIndex: 100,
        textAlign:'center',
      },
      circleTouch: {
        height: MARGIN,
        width: MARGIN,
        marginTop: -MARGIN,
        borderWidth: 1,
        borderColor: '#F035E0',
        borderRadius: 100,
        alignSelf: 'center',
        zIndex: 99,
        backgroundColor: '#F035E0',
      },
      textTouch: {
        color: 'white',
        backgroundColor: 'transparent',
        
      },
      imageTouch: {
        width: 24,
        height: 24,
      },
    });
    
    
    const mapStateToProps = ({ auth }) => {
      const { email, password, error, loading } = auth;
    
      return { email, password, error, loading };
    };
    
    export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
    