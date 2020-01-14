import {StyleSheet,Platform} from 'react-native'
import {vh,vw,DesignWidth, DesignHeight,Colors} from '../../Constants'
import color from '../../Constants/color';
const styles = StyleSheet.create({

  containnerStyle:{

width:vw(343),

height:vh(210),
backgroundColor:Colors.OpacityColor,
marginTop:vh(30),
marginLeft:vw(16),
borderRadius:vw(10),
borderStyle:'dashed',
borderColor:"rgba(19,31,52,1)",
borderWidth:vh(2),
  },
  viewStyle:{width:vw(220),height:vh(50),marginLeft:vw(76),marginTop:vh(60),alignItems:'center',flexDirection:'row'},
  textStyle1:{
    color:'rgb(266,266,266)',
   // fontFamily: (Platform.OS)==='ios'?'Ubuntu-Medium':'Ubuntu',
   fontFamily:"Ubuntu-Medium",
    fontSize:vw(16),
    marginLeft:vw(18),
    color:'white',


},  textStyle2:{
  borderColor:'rgb(156,39,176)',
  borderWidth:2,
paddingTop:vh(20),
paddingLeft:vw(20),
  borderRadius:vw(10),
 width:vw(DesignWidth-32),
 marginHorizontal:vw(16),
  color:'rgb(200,200,200)',
 // fontFamily: (Platform.OS)==='ios'?'Ubuntu-Medium':'Ubuntu',
 fontFamily:"Ubuntu-Medium",
  fontSize:vh(18),
  color:'white',
  backgroundColor:'rgb(38,55,90)'

}
,ImageStyle:{

  top:vh(190),
  left:vw(138),
  position:'absolute',

},fblabel:{
  paddingHorizontal:vw(16),
paddingVertical:vh(16),
  width:vw(343),
  backgroundColor:Colors.OpacityColor,
  borderWidth:2,
  marginTop:vh(20),
  marginLeft:vw(16),
  flexDirection:'row',

  alignItems:'center',
  borderStyle:"solid",
  borderRadius:vw(10),
  borderColor:Colors.borderColor

},fbimage:{height:vw(48),width:vw(48),backgroundColor:Colors.instagrambackground,borderRadius:vw(24)},
    

candyHeader:{
  width:vw(374),
  height:vh(101),
  resizeMode:"stretch"
},
kandilabel:{
  height:vh(60),
  width:vw(343),
  borderRadius:vw(1000),
  fontSize:vw(18),
  paddingHorizontal:vw(12),
color:'white',
  backgroundColor:'rgb(38,55,90)',
  

},kandiPlaceHolder:{paddingHorizontal:vw(32),paddingVertical:vh(20),color:'rgb(200,200,200)',fontSize:vh(18),},
ImageLayout:{
flexDirection:'row',
marginTop:vh(30)

}



});
export default styles;