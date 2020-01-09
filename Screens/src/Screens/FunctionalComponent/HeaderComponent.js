import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground,TouchableOpacity,Image } from 'react-native';
import { Images, Dimension, vh, vw, Colors, DesignWidth } from '../../Constants'

function Header(props) {
    return (
        <ImageBackground
            
            source={Images.signUpHeader}
            resizeMode="stretch"
            resizeMethod="resize"
            style={styles.HeaderStyle} >
            <TouchableOpacity onPress={props.goBack}>
                <Image style={styles.backicon} source={Images.signUpBack} />
            </TouchableOpacity>
            <Text style={{...styles.textStyle2,fontSize: vh(props.size),}} >{props.title}</Text>
            <Text style={styles.textStyle} >{props.title2}</Text>



        </ImageBackground>
    )
}


const styles = StyleSheet.create({

    HeaderStyle: {
        height: vh(238),
        width: vw(375),
    


        
    },
    backicon:{
        marginTop:vw(57.7),
        marginLeft:vw(16)

    },textStyle2: { 
       height:vh(23),
       width:vw(143),
       marginTop:vh(30.5),
       color:'rgb(255,255,255)',
       marginLeft:vw(16),
        fontFamily: (Platform.OS)==='ios'?'Ubuntu-Medium':'Ubuntu',
        
   
   }, textStyle: { 

       marginTop:vh(11),
       color:'rgb(255,255,255)',
       marginLeft:vw(16),
        fontFamily: (Platform.OS)==='ios'?'Ubuntu-Bold':'Ubuntu-B',
         fontSize: vh(40), 
   
   }



});

export default Header