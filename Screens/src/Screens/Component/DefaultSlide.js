
import React, { Component } from 'react';
import { View, Text, ImageBackground, Image , Dimensions, Platform,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Images, Dimension, vh, vw, Colors, DesignWidth } from '../../Constants'

export default class DefaultSlide extends React.PureComponent {
  render(props) {
    const { item } = this.props;


    return (
      <View style={{ flex: 1,backgroundColor:'rgb(19,31,52)'}} >
      <Image 
      style={{flex:1,width:vw(DesignWidth)}}
      resizeMode="stretch"
    
        source={item.image}>




        
      </Image>

    </View>
    );
  }
}

