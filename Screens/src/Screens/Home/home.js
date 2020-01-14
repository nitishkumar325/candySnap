import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, UIManager, Animated, LayoutAnimation } from 'react-native';
import { Images, Dimension, vh, vw, Colors, DesignHeight, DesignWidth } from '../../Constants'
import styles from '../Home/styles'
import MyButton from '../FunctionalComponent/Button'

export default class home extends Component {
  constructor(props) {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    super(props);

    this.state = {
      switch: true,
      event: "made"
    };
  }


  changeState = (val) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    if (val) {
      this.setState({
        switch: true,
        event: "made"


      })
    } else {
      this.setState({
        switch: false,
        event: "Discoverd"

      })
    }


  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white", height: vh(DesignHeight), width: vw(DesignWidth),backgroundColor:'rgb(19,31,52)' }}>
        <ImageBackground resizeMode="stretch" style={styles.imageStyle} source={Images.HomeHeader}>
          <View style={styles.homeView}>
            <Text style={styles.HomeText}>Home</Text>
            <Image style={{ marginTop: vh(57), marginLeft: vw(183) }} source={Images.SearchIcon} />
            <Image style={{ marginTop: vh(57), marginLeft: vw(24) }} source={Images.saveCandy} />
          </View>
          <View style={styles.madeView}>
            <TouchableOpacity  onPress={() => { this.changeState(true) }}
              style={{ flex: 1,borderRadius:vw(1000),justifyContent:'center',alignItems:'center'}}>
              <Text style={{ fontFamily: (Platform.OS) === 'ios' ? 'Ubuntu-Bold' : 'Ubuntu-B', color: 'white', fontSize: vw(16) }} >Made</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.changeState(false) }}
              style={{ flex: 1, borderRadius: vw(1000), justifyContent: 'center', alignItems: 'center' }}>
              <Text  style={{ fontFamily: (Platform.OS) === 'ios' ? 'Ubuntu-Bold' : 'Ubuntu-B', color: 'white', fontSize: vw(16), textAlign: 'center' }}>Discoverd</Text>
            </TouchableOpacity>
            <View style={this.state.switch?{position:'absolute',width:vw(DesignWidth-200),height:vh(55),borderRadius:vw(1000),flexDirection:'row',backgroundColor:'red',left:-0.5}:{position:'absolute',width:vw(DesignWidth-200),height:vh(55),borderRadius:vw(1000),flexDirection:'row',backgroundColor:'red',right:-0.5}}>
         <TouchableOpacity 
           style={{flex:1, borderRadius:vw(1000), backgroundColor:'white', alignItems:'center',justifyContent:'center'}}>
            <Text style={{ fontFamily: (Platform.OS)==='ios'?'Ubuntu-Bold':'Ubuntu-B',color:'rgb(233,30,99)',fontSize:vw(16),textAlign:'center'}}>{this.state.event}</Text>
          </TouchableOpacity>
          </View>
          </View>
        </ImageBackground>

<Image style={{marginTop:vh(60),marginLeft:vw(140)}} source={Images.EmptyGraphics}/>
<Text style={styles.LookText}>Looks like it’s time to create{"\n"}
some Kandi !</Text>

  <MyButton top={"35"} StartColor={Colors.firstColor} EndColor={Colors.secondColor} text={"Get Kandisnap Beads"} onbuttonPressed={this.goToLogin}/>

        <View
          style={styles.BottomView}>


          <View style={{ backgroundColor: 'black', height: vh(50), backgroundColor: 'rgb(18,40,87)', flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'space-around' }}>
              <Image source={Images.home} />
              <Image source={Images.Discover} />
            </View>

            <Image style={{ justifyContent: 'center', alignItems: 'center', marginBottom: vh(50) }} source={Images.ScanIcon} />

            <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'space-around' }}>
              <Image source={Images.Notification} />
              <Image source={Images.ProfileIcon} />
            </View>


          </View>
          <View style={{ backgroundColor: 'black', height: vh(50), backgroundColor: 'rgb(18,40,87)' }} />



        </View>
      </View>
    );
  }
}
