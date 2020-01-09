import {StyleSheet,Platform} from 'react-native'
import {vh,vw,DesignWidth, DesignHeight,Colors} from '../../Constants'
export default styles = StyleSheet.create({
    
     signHeaderStyle:{
        height:vh(238),
        width:vw(375),
        alignSelf:'stretch',
     },
     containner:{
        height:'100%',
        width:'100%',
        backgroundColor:'rgb(19,31,52)',
        
       
    },
     backicon:{
         marginTop:vw(57.7),
         marginLeft:vw(16)

     },textStyle2: { 
        height:vh(23),
        width:vw(143),
        marginTop:vh(30.5),
        color:'rgb(255,255,255)',
        marginLeft:vw(16),
         fontFamily: (Platform.OS)==='ios'?'Ubuntu-Medium':'Ubuntu-M',
        fontSize: vh(16), 
    
    }, textStyle: { 
        height:vh(46),
        width:vw(119),
        marginTop:vh(11),
        color:'rgb(255,255,255)',
        marginLeft:vw(16),
         fontFamily: (Platform.OS)==='ios'?'Ubuntu-Bold':'Ubuntu-B',
     fontSize: vh(40), 
    
    },
    labelFirst:{
        marginTop:vh(30),
        marginHorizontal:vw(16)
    }, forgetPassword:{
        opacity:0.4,
        color:'rgb(255,255,255)',
        fontSize:vw(14),
        marginTop:vh(20),
        marginLeft:vw(220),
        fontFamily: (Platform.OS)==='ios'?'Ubuntu-Medium':'Ubuntu', 
    }, LoginLayout:{
   
        marginTop:vh(24),
        height:vh(60),
        width:null,
         alignSelf:'stretch',
        flexDirection:'row',
        
        paddingHorizontal:vw(108)
      
        
        
    }, textStyle3: {
        opacity: 0.7,
        width: vw(343),
        height: vh(56),
        backgroundColor: 'rgba(18,40,87,0.75)',
        borderWidth: vw(2),
        paddingVertical: vh(19),
        paddingLeft: vw(32),
        borderRadius: vh(65),
        fontSize: vh(16),
        borderColor: 'red',
        color: 'white',
        fontFamily: (Platform.OS) === 'ios' ? 'Ubuntu-Medium' : 'Ubuntu-B',


    },textStyle4: {
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