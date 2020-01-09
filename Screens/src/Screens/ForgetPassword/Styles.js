import {StyleSheet,Platform} from 'react-native'
import {vh,vw,DesignWidth, DesignHeight,Colors} from '../../Constants'
const styles = StyleSheet.create({

    textStyle:{
        marginTop:vh(10),
        marginLeft:vw(16),
        color:'white',
       // fontFamily: (Platform.OS)==='ios'?'Ubuntu-Medium':'Ubuntu',
       fontFamily:"Ubuntu-Medium",
        fontSize:vw(16)

    },
    viewStyle:{
        marginTop:vh(32),
        width:vw(DesignWidth),
        height:vh(80),
       flexDirection:'row',
       justifyContent:'space-evenly',
     
    },  viewStyle1:{
        paddingHorizontal:vw(16),
        marginTop:vh(20),
        width:vw(DesignWidth),
        height:vh(38),
       flexDirection:'row',

       justifyContent:'space-between',
     
    },textStyle1:{
        color:'rgb(266,266,266)',
       // fontFamily: (Platform.OS)==='ios'?'Ubuntu-Medium':'Ubuntu',
       fontFamily:"Ubuntu-Medium",
        fontSize:vh(14),
        marginRight:vw(15)

    }
    
});
export default styles;