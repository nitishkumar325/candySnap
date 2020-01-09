import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Images, Dimension, vh, vw, Colors } from '../../Constants'
import styles from './styles'
import MyButton from  '../FunctionalComponent/Button'

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgb(19,31,52)' }} >
        <ImageBackground
          style={styles.containner}
          source={Images.welcome} >
          <Image
            resizeMode='contain'
            style={styles.logostyle}
            source={(Images.welcome_logo)} />
            <Text style={styles.textStyle} >KandiSnap</Text>
            <Text style={styles.textStyle2} >share Your Story</Text>
            <TouchableOpacity >
            <MyButton 
            StartColor={Colors.firstColor}
            EndColor={Colors.secondColor}
            top={49}
            text={"Discover a Kandi"}/>
          </TouchableOpacity>
          <View style={styles.LoginLayout}>
            <Text  style={styles.loginButton}>Login</Text>
            <Text style={styles.loginButton}>Signup</Text>
          </View>
        </ImageBackground>


      </View>
    );
  }
}
