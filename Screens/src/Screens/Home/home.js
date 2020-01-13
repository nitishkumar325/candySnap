import React, { Component } from 'react';
import { View, Text,ImageBackground ,Image,TouchableOpacity} from 'react-native';
import { Images, Dimension, vh, vw, Colors, DesignHeight, DesignWidth } from '../../Constants'
import styles from '../Home/styles'
 
export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      madeSelect:true,
      DiscoverSelect:false
    };
  }

   changeState=(val)=>{
if(val){
this.setState({
madeSelect:true,
DiscoverSelect:false

})}else
{
this.setState({
  madeSelect:false,
  DiscoverSelect:true
})
}

  }
  render() {
    return (
      <View style={{flex:1,backgroundColor:"white",height:vh(DesignHeight),width:vw(DesignWidth)}}>
      <ImageBackground resizeMode="stretch" style={styles.imageStyle} source={Images.HomeHeader}>
        <View style={styles.homeView}>
        <Text style={styles.HomeText}>Home</Text>
        <Image style={{marginTop:vh(57),marginLeft:vw(183)}} source={Images.SearchIcon} />
        <Image style={{marginTop:vh(57),marginLeft:vw(24)}} source={Images.saveCandy} />
        </View>
        <View style={styles.madeView}>

          <TouchableOpacity onPress={()=>this.changeState(true)}
          style={this.state.madeSelect?{flex:1,backgroundColor:'white',borderRadius:vw(1000),justifyContent:'center',alignItems:'center'}:{flex:1,backgroundColor:'transparent',borderRadius:vw(1000),justifyContent:'center',alignItems:'center'}}>
          <Text style={ this.state.madeSelect?{ fontFamily: (Platform.OS)==='ios'?'Ubuntu-Bold':'Ubuntu-B',color:'rgb(233,30,99)',fontSize:vw(16)}:{ fontFamily: (Platform.OS)==='ios'?'Ubuntu-Bold':'Ubuntu-B',color:'white',fontSize:vw(16)}} >Made</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>this.changeState(false)}
           style={this.state.DiscoverSelect?{flex:1,backgroundColor:'white',borderRadius:vw(1000),justifyContent:'center',alignItems:'center'}:{flex:1,backgroundColor:'transparent',borderRadius:vw(1000),justifyContent:'center',alignItems:'center'}}>
            <Text style={this.state.DiscoverSelect?{ fontFamily: (Platform.OS)==='ios'?'Ubuntu-Bold':'Ubuntu-B',color:'rgb(233,30,99)',fontSize:vw(16)}:{ fontFamily: (Platform.OS)==='ios'?'Ubuntu-Bold':'Ubuntu-B',color:'white',fontSize:vw(16)}}>Discoverd</Text>
          </TouchableOpacity>
        </View>        
        </ImageBackground>
        <View 
         style={styles.BottomView}>
           
   
           <View style={{backgroundColor:'black',height:vh(50),backgroundColor:'rgb(18,40,87)',flexDirection:'row',alignItems:'center'}}>
             <View style={{flexDirection:'row',flex:2,justifyContent:'space-around'}}>
               <Image source={Images.home} />
               <Image source={Images.Discover} />
             </View>

             <Image style={{justifyContent:'center',alignItems:'center',marginBottom:vh(50)}} source={Images.ScanIcon}/>

             <View style={{flexDirection:'row',flex:2,justifyContent:'space-around'}}>
               <Image source={Images.Notification} />
               <Image source={Images.ProfileIcon} />
             </View>
             
             
           </View>
           <View style={{backgroundColor:'black',height:vh(50),backgroundColor:'rgb(18,40,87)'}}/>
       
         

        </View>
    




      </View>
    );
  }
}
