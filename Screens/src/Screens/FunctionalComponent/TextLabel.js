import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Images, Dimension, vh, vw, Colors } from '../../Constants'


 Item=React.forwardRef((props,ref)=>{

    return (
        <View>
            <TextInput
            secureTextEntry={props.securetext}
            placeholder={props.text}
                ref={ref}
                onChangeText={props.parm1}
                onBlur={props.param2}
                value={props.param3}
                placeholderTextColor="white"
                onSubmitEditing={() => props.onSubmitEditing()}   
                style={props.param5 && props.param6 ? { ...styles.textStyle, borderColor: 'red', marginHorizontal: vw(props.left), marginTop: vh(props.top) } : { ...styles.textStyle, borderColor: 'rgb(33,61,121)', marginHorizontal: vw(props.left), marginTop: vh(props.top) }} />
            {
                props.param5 && props.param6 &&
                <Text style={{ fontSize: vh(12), color: 'red', marginLeft: vw(32) }}>{props.param6}</Text>
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