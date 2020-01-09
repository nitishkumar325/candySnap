import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground,TouchableOpacity,Image } from 'react-native';
import { Images, Dimension, vh, vw, Colors, DesignWidth } from '../../Constants'

function forget(props)
{
    return(
<TextInput 
 placeholderTextColor="white"
 style={{...styles.textStyle}}>{props.text}</TextInput>
    )
}



const styles = StyleSheet.create({
 textStyle:{
    opacity:0.7,
    width:vw(78),
    height:vh(80),
     backgroundColor:'rgba(18,40,87,0.75)',
    borderWidth:vw(3),
    paddingVertical:vh(19),
    paddingLeft:vw(32),
    borderRadius:vh(20),
    fontSize:vw(24),
    borderColor:'rgb(33,61,121)',
    color:'rgb(255,255,255)',
    fontFamily: (Platform.OS)==='ios'?'Ubuntu-Bold':'Ubuntu-B',


}

});
export default forget;