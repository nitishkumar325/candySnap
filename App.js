import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from './Screens/src/Screens/SignupScreens/SignupScreen'
import SplashScreen from './Screens/src/Screens/SplashScreen/Splash'
import introslider from './Screens/src/Screens/Component/AppIntroSlider'
import login from './Screens/src/Screens/LogInScreen/SignupScreen'
import SignUp from './Screens/src/Screens/SignupScreens/SignupScreen'
import ForgetPassword from './Screens/src/Screens/ForgetPassword/Forgetpassword'
import ResetPassword from './Screens/src/Screens/ResetPassword/ResetPassword'
import CreateProfile from './Screens/src/Screens/CreateYourProfile/createYourProfile'
import Splash from './Screens/src/Screens/SplashScreen/Splash'
import {Provider} from 'react-redux'
import Store from './Screens/src/Store/store'
import home from './Screens/src/Screens/Home/home'

const AppNavigator = createStackNavigator({

    LoginScreen: LoginScreen,
    SplashScreen:SplashScreen,
    introslider:introslider,
    login:login,
    SignUp:SignUp,
    ForgetPassword:ForgetPassword,
    ResetPassword:ResetPassword,
    CreateProfile:CreateProfile,
    Splash:Splash,
    home:home

  
},{
  headerMode: 'none',
  initialRouteName:'home',
  navigationOptions: {
    headerVisible: false,
  }
}
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
 
  render() {

    return (
      <Provider store={Store}>
    <AppContainer/>
    </Provider>
    );
  }
}
