import LinearGradient from 'react-native-linear-gradient';
import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { Images, Dimension, vh, vw, Colors } from '../../Constants'

function LoginButton(props){



    // const buttonAction=(props)=>{
    //     if(props.type==="Login")
    //     {
           
    //     }else{
    //         props.handleSubmit
    //     }
     
        
    // }

    return(
        <TouchableOpacity
        disabled={props.correct}
        onPress={props.handleSubmit}
        

        >
        <LinearGradient
        
        style={{...styles.DiscoverCandyButton,marginTop:vh(props.top),}}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={[props.StartColor, props.EndColor]} >
            
        <Text 
        style={styles.textStyle3}>{props.text}</Text>
        
      </LinearGradient>
      </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    DiscoverCandyButton:{
        height:vh(50),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        width:null,
        alignSelf:'stretch',
        marginTop:vh(94),
        // backgroundColor:'rgb(23330,99)',
        marginLeft:vw(20),
        marginRight:vw(20),
        borderRadius:vw(40)
    }, textStyle3: { 
        color:'rgb(255,255,255)',
        fontFamily: (Platform.OS)==='ios'?'Ubuntu-Bold':'Ubuntu-B',  
              fontSize: 16,    
    },
});
export default LoginButton;