import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,alert } from 'react-native';
import { Images, Dimension, vh, vw, Colors } from '../../Constants'


 Item=React.forwardRef((props,ref)=>{
    //console.warn(props.customStyle.borderColor)
    return (
        <View>
                <TextInput
             secureTextEntry={props.securetext}
            keyboardType={props.keyboardType}
             placeholder={props.text}
                ref={ref}
                onChangeText={props.onChangeText}
                onBlur={props.onfocus}
                value={props.param3}
                placeholderTextColor="white"   
                onSubmitEditing={() => props.onSubmitEditing()} 
                style={props.customStyle}  
                />
              {
              
             (props.mobile_error)!==''?
             <Text style={{ fontSize: vh(12), color: 'red', marginLeft: vw(32) }}>{props.mobile_error}</Text>:null
            }
        
           
        </View>


    )
}
 )
const styles = StyleSheet.create({
    textStyle: {
        opacity: 0.7,
        width: vw(343),
        height: vh(56),
        backgroundColor: 'rgba(18,40,87,0.75)',
        borderWidth: vw(2),
        paddingVertical: vh(19),
        paddingLeft: vw(32),
        borderRadius: vh(65),
        fontSize: vh(16),
        borderColor: 'rgb(33,61,121)',
        color: 'white',
        fontFamily: (Platform.OS) === 'ios' ? 'Ubuntu-Medium' : 'Ubuntu-B',


    }

});
export default Item;