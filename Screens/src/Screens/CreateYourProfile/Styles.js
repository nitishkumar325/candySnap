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
borderColor:Colors.dottedColor,
borderWidth:vh(2),
  },
  viewStyle:{width:vw(220),height:vh(50),marginLeft:vw(76),marginTop:vh(60),alignItems:'center',flexDirection:'row'},
  textStyle1:{
    color:'rgb(266,266,266)',
   // fontFamily: (Platform.OS)==='ios'?'Ubuntu-Medium':'Ubuntu',
   fontFamily:"Ubuntu-Medium",
    fontSize:vw(14),
    marginLeft:vw(18),
    color:'white'

},ImageStyle:{

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

},fbimage:{height:vw(48),width:vw(48),backgroundColor:Colors.instagrambackground,borderRadius:vw(24)}
    
});
export default styles;