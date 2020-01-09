import {StyleSheet,Platform} from 'react-native'
import {vh,vw,DesignWidth, DesignHeight,Colors} from '../../Constants'

export default styles = StyleSheet.create({

    termLayout:{
        width:vw(DesignWidth),
        height:vh(30),
        marginTop:vh(48),
        paddingHorizontal:vw(24),
        flexDirection:'row'
    
    },textStyle:{
        fontFamily: (Platform.OS)==='ios'?'Ubuntu-Medium':'Ubuntu-M',
        fontSize: vw(14),
        color:'white',
        marginLeft:vw(16) 

    },LoginLayout:{
        marginTop:vh(24),
        marginBottom:vw(100),
        height:vh(60),
        width:null,
         alignSelf:'stretch',
        flexDirection:'row',
        
        paddingHorizontal:vw(108)
      
        
        
    }
 });