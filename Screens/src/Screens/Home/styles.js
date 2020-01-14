import {StyleSheet,Platform} from 'react-native'
import {vh,vw,DesignWidth, DesignHeight,Colors} from '../../Constants'

export default styles = StyleSheet.create({

   imageStyle:{
       height:vh(250),
       width:vw(DesignWidth),
   },
   homeView:{
      flexDirection:'row' ,

      height:vh(80)
   },
   HomeText:{
         marginTop:vh(54),
         color:'rgb(255,255,255)',
         marginLeft:vw(16),
          fontFamily: (Platform.OS)==='ios'?'Ubuntu-Bold':'Ubuntu-B',
          fontSize: vh(24), 
     
   },LookText:{
      marginTop:vh(20),
      color:'rgb(255,255,255)',
      marginLeft:vw(50),
       fontFamily: (Platform.OS)==='ios'?'Ubuntu-Bold':'Ubuntu-B',
       fontSize: vh(20), 
  
},
   madeView:{
      flexDirection:'row',
      borderColor:'white',
    
  
      
      borderWidth:2,
      borderRadius:vw(1000),
            marginTop:vh(26),
      width:vw(DesignWidth-32),
      height:vh(58),
      marginHorizontal:vw(16)


   },BottomView:{
     backgroundColor:'red',
      position:'absolute',
      bottom:0,
      width:vw(DesignWidth),
      height:vh(100),

   }

 });