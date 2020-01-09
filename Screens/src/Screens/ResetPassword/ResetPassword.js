import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Images, Dimension, vh, vw, Colors } from '../../Constants'
import Header from '../FunctionalComponent/forget_reset_password'

import MyButton from '../FunctionalComponent/Button'
import TextLabel from '../FunctionalComponent/TextLabel'

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  gotoBack=()=>{
    console.warn("forget back")
    this.props.navigation.goBack()
      }
      goToLogin=()=>{
        this.props.navigation.navigate('login') 
      }
  render() {
    return (
        <ImageBackground style={{ flex: 1, backgroundColor: 'rgb(19,31,52)' }}
        source={Images.welcome}
    >
        <Header size={40} title={"Reset"} title2={"Password ?"} goBack={this.gotoBack}  />
        <TextLabel securetext={true} text={"Enter New Password"} left={"16"} top={"30"}/>
        <TextLabel securetext={true}  text={"Confirm New Password"} left={"16"} top={"30"}/>
        <MyButton top={"48"} StartColor={Colors.firstColor} EndColor={Colors.secondColor} text={"Reset Password"} onbuttonPressed={this.goToLogin}/>




    </ImageBackground>
  
    );
  }
}
