import React, { Component, Fragment } from 'react';
import * as yup from 'yup'
import { Formik } from 'formik'
import { View, Text } from 'react-native';
import { db } from '../firebaseConfig/firebaseConfig';
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'
import { ImageBackground, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Images, Dimension, vh, vw, Colors } from '../../Constants'
import Header from '../FunctionalComponent/HeaderComponent'
import TextLabel from '../FunctionalComponent/TextLabel'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MyButton from '../FunctionalComponent/Button'

import styles from '../SignupScreens/Styles'

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
     this.name = React.createRef();
        this.mobile_no = React.createRef();
        this.email = React.createRef();
        this.username = React.createRef();
        this.password = React.createRef();
    this.state = {
      checked: false,

    };
  }

  gotoBack=()=>{
this.props.navigation.goBack()
  }


  handleSignUp = (values) => {
    console.warn("coming=>",values.email)
    console.warn("password=>",values.password)

    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password).then((res)=>{this.setNewUserToFireBase(values,res.user.uid)})
      .catch(error =>alert(error))
  }


  setNewUserToFireBase=(res,uid)=>{
     

   console.warn("save =>",res)
   var obj=res;
   obj["uid"]=uid
    console.warn("save object_1=>",obj)
    db.ref('/Users').child(uid).set(res,(val)=>{
      console.warn("val",val)
      if(val===null)
      {
        this.props.navigation.navigate('LoginScreen')
        console.warn("sucess")
      }
    })

  }


 
  render() {
    return (

      <ImageBackground style={{ flex: 1, backgroundColor: 'rgb(19,31,52)' }}
        source={Images.welcome}
      >

        <Header title={"Hello"} title2={"sign up"} size={20} goBack={this.gotoBack} />
        <KeyboardAwareScrollView
          scrollEnabled={true}
          contentContainerStyle={{ flexGrow: 1 }}
          bounces={false}>
          <Formik
            initialValues={{ email: '', password: '', phone_no: '', name: '', username: '', landLine: '', terms: false }}
            onSubmit={(values, { resetForm }) => {
             this.handleSignUp(values)
              

          }}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .email()
                .required(),

              terms: yup.boolean().oneOf([true]),

              password: yup
                .string()
                .min(6)
                .required(),
              name: yup
                .string().min(3, "please enter correct name")
                .trim()
                .required("please enter first name"),
              username: yup
                .string().length(7, "please enter correct username")
                .trim()
                .required("please enter username name"),
              phone_no:
                yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "invalid no")
                  .length(10, "Phone No should be 10 length").required("please enter phone no"),
            })}
          >
            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit, setFieldValue }) => (
              
              <Fragment>
                <TextLabel
                  ref={this.name}
                  left={16} top={28} text={"Name*"}
                  param3={values.name}
                  param5={touched.name}
                  param6={errors.name}
                  parm1={handleChange('name')}
                  param2={() => setFieldTouched('name')}
                  onSubmitEditing={() => this.mobile_no.current.focus()}                  />

                <TextLabel left={16} top={28}
                ref={this.mobile_no}
                  text={"Mobile Number*"}
                  onSubmitEditing={() => this.email.current.focus()}   

                  parm1={handleChange('phone_no')}
                  param3={values.phone_no}
                  param2={() => setFieldTouched('phone_no')}
                  param5={touched.phone_no}
                  param6={errors.phone_no} />

                <TextLabel left={16} top={28} text={"Email Address*"}
                 ref={this.email}
                  parm1={handleChange('email')}
                  param2={() => setFieldTouched('email')}
                  param5={touched.email}
                  param3={values.email}
                  param6={errors.email}
                  onSubmitEditing={() => this.username.current.focus()}    />

                <TextLabel left={16} top={28} text={"User Name*"}
                 ref={this.username}
                  parm1={handleChange('username')}
                  param2={() => setFieldTouched('username')}
                  param5={touched.username}
                  param3={values.username}
                  param6={errors.username} 
                  onSubmitEditing={() => this.password.current.focus()}   />
                <TextLabel left={16} top={28} text={"Password*"}
                 ref={this.password}
                  parm1={handleChange('password')}
                  param2={() => setFieldTouched('password')}
                  param5={touched.password}
                  param3={values.password}
                  param6={errors.password}
                  onSubmitEditing={() => this.mobile_no.current.focus()}    />

                <View style={styles.termLayout}>
                  <TouchableOpacity onPress={() => {
                    values.terms ? setFieldValue('terms', false) : setFieldValue('terms', true)
                  }}
                  >
                    <Image
                      resizeMode={"contain"}
                      source={values.terms ? Images.checkedBox : Images.uncheckedBox}
                    />
                    {/* {
             touched.terms && errors.terms &&
                     //   alert("please select terms conditon")
          } */}

                  </TouchableOpacity>
                  <Text style={(touched.terms && errors.terms) ? { ...styles.textStyle, color: 'red' } : styles.textStyle} >I agree to Terms and Conditions</Text>
                </View>

                <MyButton
                  isdisabled={!isValid}
                  handleSubmit={handleSubmit}
                  StartColor={Colors.thirdColor}
                  EndColor={Colors.fourthColor}
                  text={"Sign Up"}
                  top={30} />
              </Fragment>
            )}
          </Formik>


          <Text style={{ marginTop: vh(30), color: 'white', marginLeft: vw(180), fontSize: vw(16) }} >or</Text>
          <View style={styles.LoginLayout}>
            <TouchableOpacity>
              <Image source={Images.Facebookimage}
                style={{ marginRight: vh(50) }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.Instagramimage} />
            </TouchableOpacity>
          </View>


        </KeyboardAwareScrollView>
      </ImageBackground>

    );
  }
}
