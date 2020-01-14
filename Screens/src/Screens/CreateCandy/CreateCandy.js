import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TextInput, Platform, TouchableOpacity, ActivityIndicator, Animated, Easing, UIManager, LayoutAnimation, FlatList } from 'react-native';
import HeaderComponent from '../FunctionalComponent/forget_reset_password'
import { Images, Dimension, vh, vw, Colors, DesignWidth } from '../../Constants'
import { db } from '../firebaseConfig/firebaseConfig';
import ImagePicker from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MyButton from '../FunctionalComponent/Button'
import styles from '../CreateCandy/Styles';
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'
import { red } from 'ansi-colors';


export default class CreateCandy extends Component {
    constructor(props) {
        super(props);
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        this.state = {
            // spinValue : new Animated.Value(0)
            topcon: true,
            top: 350,
            pulbicSelect:true,
            privateSelect:false

        };
    }

    startAnimation = () => {
        LayoutAnimation.configureNext(
            LayoutAnimation.create(
              300,
              LayoutAnimation.Types.linear,
              LayoutAnimation.Properties.scaleXY,
            ),
          );
        this.setState({
            topcon: false,
            top: 50
        })
    };
    changeType=(val)=>{
        if(val)
        {
this.setState({
  privateSelect:true,
  pulbicSelect:false
})
        }else{
            this.setState({
                privateSelect:false,
                pulbicSelect:true
              })
        }
    }

    downAnimation = () => {
        LayoutAnimation.configureNext(
            LayoutAnimation.create(
              300,
              LayoutAnimation.Types.linear,
              LayoutAnimation.Properties.scaleXY,
            ),
          );
        this.setState({
            topcon: true,
            top: 350
        })
    
    };







    render() {





        return (
            <View style={{ flex: 1, backgroundColor: 'rgb(19,31,52)' }}>
                <ImageBackground style={styles.candyHeader} source={Images.CreateCandyHeader} />
                <KeyboardAwareScrollView  
                 scrollEnabled={true}
                 contentContainerStyle={{ flexGrow: 1 }}
                 bounces={false}
                >
                <ImageBackground
                    resizeMode={"cover"}
                    resizeMethod="resize"
                    style={{ ...styles.containnerStyle, borderRadius: vh(10), overflow: "hidden" }}
                >
                    <View style={styles.viewStyle}>
                        <Image source={Images.CreateProfileImage} />
                        <Text style={{...styles.textStyle1,marginLeft:vw(20)}} >add images</Text>
                    </View>
                </ImageBackground>
                <TextInput style={{ ...styles.kandilabel, marginHorizontal: vw(16), marginTop: vh(20) }} placeholder="Kandi Name" placeholderTextColor="rgb(200,200,200)" ></TextInput>
                <View style={this.state.topcon ? { height: vh(60), width: vw(DesignWidth - 32), marginHorizontal: vw(16), 
                    backgroundColor: red, position: 'absolute', top: vh(350), borderRadius: vw(60) } : { height: vh(320), width: vw(DesignWidth - 32), marginHorizontal: vw(16), borderadius: vw(1000), borderwidth: 2, backgroundColor: 'yellow', borderRadius: vw(40), position: 'absolute', top: vh(50), backgroundColor: 'rgb(38,55,90)' }}>
                    <View
                        style={this.state.topcon ? {
                            ...styles.kandilabel,
                            height: vh(60), borderRadius: vw(60), backgroundColor: 'rgb(38,55,90)'
                        } :
                            {
                                ...styles.kandilabel, borderRadius: vw(60), backgroundColor: 'rgb(38,55,90)', borderRadius: vw(60), shadowOffset: {
                                    width: 0,
                                    height: 11,
                                },
                                shadowOpacity: 0.55,
                                shadowRadius: 14.78,
                            }}>
                        <TextInput onBlur={this.downAnimation} onFocus={this.startAnimation} style={{
                            paddingVertical: vw(15), fontSize: vw(18), shadowColor: "#000", backgroundColor: 'transparent',

                            elevation: 22,
                        }} placeholder="Event" placeholderTextColor="rgb(200,200,200)" />
                        <FlatList  />
                    </View>
                </View>
                <TextInput 
              maxLength={400} multiline={true}

              placeholder="Add Description" placeholderTextColor="white"
              style={{
                ...styles.textStyle2, height: vh(172),
                marginTop:vh(120)
              }} />
              <Text style={{...styles.textStyle1,marginTop:vh(40),marginLeft:vw(16)}}>Privacy</Text>
         
       <View style={styles.ImageLayout} >
           <TouchableOpacity onPress={()=>{this.changeType(true)}} style={{flex:1,justifyContent:'center',alignItems:'center',height:vh(100)}}>
           <Image style={this.state.privateSelect?{height:vh(80),width:vw(80),tintColor:'rgb(233,30,90)'}:{height:vh(80),width:vw(80),}}  resizeMode="contain" source={Images.PrivateIcon} />
           <Text style={this.state.privateSelect?{...styles.textStyle1,marginLeft:0,color:'rgb(233,30,99)'}:{...styles.textStyle1,marginLeft:0}}>Privacy</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{this.changeType(false)}}
          style={{flex:1,justifyContent:'center',alignItems:'center',height:vh(100)}}>
           <Image style={this.state.pulbicSelect?{height:vh(80),width:vw(80),tintColor:'rgb(233,30,90)'}:{height:vh(80),width:vw(80),}} resizeMode="contain" source={Images.PublicIcon} />
           <Text style={this.state.pulbicSelect?{...styles.textStyle1,marginLeft:0,color:'rgb(233,30,99)'}:{...styles.textStyle1,marginLeft:0}}>Public</Text>
         </TouchableOpacity>
           </View>
           <MyButton  StartColor={Colors.firstColor} EndColor={Colors.secondColor} top={80} text={"Create Kandi"} />
           </KeyboardAwareScrollView>
            </View>
        );
    }
}
