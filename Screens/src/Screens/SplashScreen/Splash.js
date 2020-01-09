import React, { Component } from 'react';
import { View, Text,ImageBackground,StyleSheet } from 'react-native';
import { Images, Dimension, vh, vw, Colors } from '../../Constants'
import { connect } from 'react-redux'



export  class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

componentDidMount()
{     

  setTimeout(() => {
    if(this.props.userlogin)
    this.props.navigation.navigate('introslider')
    else
    this.props.navigation.navigate('introslider')
    
  }, 3000);



}

  render() {
    return (
<ImageBackground
source={Images.SplashScreen}
 style={{flex:1,justifyContent:'center',alignItems:'center'}}
>

<Text style={styles.textStyle} >Kandisnap</Text>


</ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: { 

    marginTop:vh(11),
    color:'rgb(255,255,255)',
    marginLeft:vw(16),
     fontFamily: (Platform.OS)==='ios'?'Ubuntu-Bold':'Ubuntu-B',
 fontSize: vh(40), 

}
});
const mapStateToProps = state => {
  console.warn("incoming state in redux=>",state)
  const { userlogin } = state.SaveFormDataReducer;
  return {
    userlogin
  }
};

const mapDispatchToProps = dispatch => ({

  addUser: (payload) => dispatch(saveFormData(payload)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);