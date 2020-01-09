import {StyleSheet,Platform} from 'react-native'
import {vh,vw,DesignWidth, DesignHeight,Colors} from '../../Constants'



export default styles = StyleSheet.create({
secondlayout:{
        height:vh(DesignHeight-566),
        width:vw(DesignWidth), 
        backgroundColor:'rgb(19,31,52)'
    },
       textStyle: { 
           position:'absolute',
        height:vh(32),
        width:vw(140),
        marginTop:vh(28.4),
        color:'rgb(255,255,255)',
        marginLeft:vw(22),
         fontFamily: (Platform.OS)==='ios'?'Ubuntu-Bold':'Ubuntu-B',
     fontSize: 18, 
    
    }, textStyle2: { 
        height:vh(29),
        width:vw(160),
        marginTop:vh(12.6),
        color:'rgb(255,255,255)',
        marginLeft:vw(20),
         fontFamily: (Platform.OS)==='ios'?'Ubuntu-Medium':'Ubuntu',
        fontSize: 18, 
    
    },DiscoverCandyButton:{
        height:vh(50),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        width:null,
        alignSelf:'stretch',
        marginTop:vh(94),
        // backgroundColor:'rgb(23330,99)',
        marginLeft:vw(20),
        marginRight:vw(20),
        borderRadius:vw(40)
    }, textStyle3: { 
        width:vw(129),
        color:'rgb(255,255,255)',
         fontFamily: (Platform.OS)==='ios'?'Ubuntu-Medium':'Ubuntu',
        fontSize: 18,    
    },
    LoginLayout:{
        marginTop:vh(24),
        height:vh(54),
        width:null,
         alignSelf:'stretch',
        flexDirection:'row',
        
        marginHorizontal:vh(20),
        justifyContent:'space-between'
        
    },
    loginButton:{
        fontFamily: (Platform.OS)==='ios'?'Ubuntu-Bold':'Ubuntu-B',
        color:'white',
        fontSize:vh(18),
        width:vw(156),
        height:vh(54),
        borderColor:'white',
        borderWidth:1,
        borderRadius:vw(27),
        paddingVertical:vh(16),
        paddingHorizontal:vw(50)
    }
});
