import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TextInput, Platform, TouchableOpacity,ActivityIndicator } from 'react-native';
import HeaderComponent from '../FunctionalComponent/forget_reset_password'
import { Images, Dimension, vh, vw, Colors } from '../../Constants'
import { db } from '../firebaseConfig/firebaseConfig';
import ImagePicker from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MyButton from '../FunctionalComponent/Button'
import styles from '../CreateYourProfile/Styles';
import { connect } from 'react-redux'
//import RNFetchBlob from 'react-native-fetch-blob'
import firebase from 'react-native-firebase'


export class createYourProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      coverImage: '',coverImageStatus:false,
      UserBio:'',
      profileimage: this.props.navigation.getParam('profile_pic'),ProfileImageStatus:false,
      isLoaded: false
    };
  }
  componentWillMount() {
    console.warn("user pic" + this.props.navigation.getParam('profile_pic'))
  }

  responseInstagram = (response) => {
    console.log(response);
  }

  getImageFromGallery = (uid) => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({
        coverImage: image.path
      }, () => {
        this.setState({coverImageStatus:true})
        const ref = firebase.storage().ref(""+uid).child("CoverImage.jpg")
        const uploadtask = ref.putFile(image.path)
        uploadtask.then((snap) => {
          ref.getDownloadURL().then((data) => {
            console.warn("image url=>", data)
            this.setState({coverImageStatus:false})
            this.updateTheUserNode(uid,{"CoverImage":data})
          })
        })
      })
    });
  }

updateTheUserNode=(uid,obj)=>{
  console.warn("#obj"+obj)
db.ref('/Users').child(uid).update(obj,(result)=>{
  console.warn("incoming result"+JSON.stringify(result))

})

}

uploadDataToFirebase=(uid)=>{
  console.warn("userBio"+this.state.UserBio)
this.updateTheUserNode(uid,{"AboutUser":this.state.UserBio})
}

  getImageFromGalleryprofile = (uid) => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({
        profileimage: image.path
      },  () => {
        this.setState({ProfileImageStatus:true})
        const ref = firebase.storage().ref(""+uid).child("profileImage.jpg")
        const uploadtask = ref.putFile(image.path)
        uploadtask.then((snap) => {
          ref.getDownloadURL().then((data) => {
            console.warn("image url=>", data)
            this.setState({ProfileImageStatus:false})
            this.updateTheUserNode(uid,{"ProfileImage":data})
          })
        })
      })
    });
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1, backgroundColor: 'rgb(19,31,52)' }}
        source={Images.welcome}
      >
        <HeaderComponent size={40} title={"Create"} title2={"your Profile"} />
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >

          <ImageBackground
            resizeMode={"cover"}
            resizeMethod="resize"
            source={{ uri: this.state.coverImage }}
            // style={styles.containnerStyle}
            style={(this.state.coverImage === '') ? styles.containnerStyle : { ...styles.containnerStyle, borderStyle: null, borderWidth: null, borderColor: null, borderRadius: vh(10), overflow: "hidden" }}
          >
          {this.state.coverImageStatus?<ActivityIndicator size="large" color="white" style={{position:'absolute',marginTop:vh(100),marginLeft:vw(150)}} />:null}
            {(this.state.coverImage === '') ?
              <View style={styles.viewStyle}>
                <Image source={Images.CreateProfileImage} />
                <Text style={styles.textStyle1} >Add Cover Image</Text>
              </View> : null
            }

            <TouchableOpacity
              onPress={() => {
                this.getImageFromGallery(this.props.uid)
              }}
              style={{ position: 'absolute', top: vh(10), left: vw(286) }}>
              <Image
                source={Images.editProfile}
              />
            </TouchableOpacity>
          </ImageBackground>
          <Image onLoad={
            console.warn("called load"),
            () => this.setState({ isLoaded: true })
          }
            style={{ ...styles.ImageStyle, height: vw(100), width: vw(100), borderRadius: vw(50) }}
            source={{ uri: this.state.profileimage }} />
          {
            !this.state.isLoaded &&
            <Image
              source={require('../../Assets/Images/ProfileImage.png')}
              style={{ ...styles.ImageStyle, height: vw(100), width: vw(100), borderRadius: vw(50) }} />
          }


           {this.state.ProfileImageStatus? <ActivityIndicator size="large" color="white" style={{ position: 'absolute', top: vh(225), left: vw(175), zIndex: 200 }}/>:null}

          <TouchableOpacity
            onPress={() => this.getImageFromGalleryprofile(this.props.uid)}
            style={{ position: 'absolute', top: vh(260), left: vw(205), zIndex: 200 }} >
            <Image
              source={Images.editProfile}

            />
          </TouchableOpacity>
          <Text style={{ ...styles.textStyle1, marginTop: vh(70) }} >Add Bio</Text>
          <View style={{ ...styles.containnerStyle, height: vh(133), borderStyle: "solid", borderColor: Colors.borderColor, marginTop: vh(10) }}>
            <TextInput onChangeText={(len) => {
              this.setState({
                UserBio:len,
                length: len.length
              })
            }}
              maxLength={400} multiline={true}

              placeholder="Describe your self" placeholderTextColor="white"
              style={{
                ...styles.textStyle1, height: vh(100),
                marginTop: Platform.OS === "ios" ? vh(10) : vh(-50),
                flex: 1,
                paddingTop: vh(-10)
              }} />

            <Text style={{ ...styles.textStyle1, marginLeft: vw(280), bottom: vw(5) }} >0/{400 - this.state.length}</Text>
          </View>
          <View style={styles.fblabel} >
            <ImageBackground
              style={styles.fbimage}
            />

            <Text style={{ ...styles.textStyle1, fontFamily: (Platform.OS) === 'ios' ? 'Ubuntu-Bold' : 'Ubuntu-B', }} >Link with Instagram</Text>
            <Image style={{ marginLeft: vw(58) }}
              source={Images.BackRight} />
          </View>
          <View style={styles.fblabel} >
            <ImageBackground
              style={{ ...styles.fbimage, backgroundColor: Colors.facebookbackground }}
            />

            <Text style={{ ...styles.textStyle1, fontFamily: (Platform.OS) === 'ios' ? 'Ubuntu-Bold' : 'Ubuntu-B', }} >Link with Facebook</Text>
            <Image style={{ marginLeft: vw(58) }} source={Images.BackRight} />
          </View>
          <View style={{ marginBottom: vh(120) }}>
            <MyButton handleSubmit={() => this.uploadDataToFirebase(this.props.uid)} StartColor={Colors.firstColor} EndColor={Colors.secondColor} top={48} text={"Create"} />
          </View>

        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  console.warn("incoming state in redux=>", state)
  const { uid } = state.SaveFormDataReducer;
  return {
    uid
  }
};

const mapDispatchToProps = dispatch => ({

  addUser: (payload) => dispatch(saveFormData(payload)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createYourProfile);
