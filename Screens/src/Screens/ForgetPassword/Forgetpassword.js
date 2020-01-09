import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Images, Dimension, vh, vw, Colors } from '../../Constants'
import Header from '../FunctionalComponent/forget_reset_password'
import Styles from '../ForgetPassword/Styles'
import ForgetComponent from '../FunctionalComponent/ForgetComponent'
import MyButton from '../FunctionalComponent/Button'
import firebase from 'react-native-firebase'

export default class Forgetpassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    gotoBack=()=>{
        console.warn("forget back")
        this.props.navigation.goBack()
          }
    goToResetPassword=()=>{
        console.warn("cal")
        this.props.navigation.navigate('ResetPassword')
    }
   

  

    render() {
        return (
            <ImageBackground style={{ flex: 1, backgroundColor: 'rgb(19,31,52)' }}
                source={Images.welcome}
            >
                <Header size={40} title={"forgot"} title2={"Password ?"} goBack={this.gotoBack}/>
                <Text style={Styles.textStyle}>
                    Enter code sent on your{"\n"}
                    mobile number +91-9958431869
        </Text>
                <View style={Styles.viewStyle}>
                    <ForgetComponent text={"1"} />
                    <ForgetComponent text={"2"} />
                    <ForgetComponent text={"3"} />
                    <ForgetComponent text={"4"} />
                </View>
                <View style={Styles.viewStyle1} >
                    <Text style={Styles.textStyle}>01m : 45s</Text>
                    <Text style={Styles.textStyle}>Resend Code</Text>
                </View>
                <MyButton onbuttonPressed={this.goToResetPassword}
                 top={"48"} StartColor={Colors.firstColor} EndColor={Colors.secondColor} text={"Submit Code"}/>




            </ImageBackground>
        );
    }
}
