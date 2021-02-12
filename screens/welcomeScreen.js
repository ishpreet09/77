
import * as React from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity, ToastAndroid} from 'react-native';

import db from '../Config';

export default class WelcomeScreen extends React.Component{

    constructor(){
        super()
        this.state={
            emailAddress:'',
            password:''
        }
    }

    userSignUp = (email, pass) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(
            (response)=>{
                ToastAndroid.show("User added successfully", ToastAndroid.SHORT)
            }
        ).catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        })
    }

    userLogin=(email, pass)=>{
        firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(
            ()=>{
                ToastAndroid.show("Login is successful", ToastAndroid.SHORT)
            }
        ).catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        })
    }
    render(){
        return(
            
            <View style={{flex:1, backgroundColor:'#F8BE85'}}>
            
               <View style={styles.profileContainer}>
                  
                   <Text style={styles.title}>Book Santa</Text>

               </View>
               <View style={styles.buttonContainer}>
                   <TextInput 
                   style={styles.loginBox}
                   placeholder="abc@example.com"
                   placeholderTextColor="#646972"
                   onChangeText={(text)=>{
                       this.setState({
                           emailAddress:text
                       })
                   }}
                   
                   />
                    <TextInput 
                   style={styles.loginBox}
                   placeholder="Password"
                   placeholderTextColor="#646972"
                   secureTextEntry={true}
                   onChangeText={(text)=>{
                       this.setState({
                           password:text
                       })
                   }}
                   
                   />

                   <TouchableOpacity 
                   style={[styles.button, {marginTop:20, marginBottom:20}]}
                   onPress={()=>{this.userLogin(this.state.emailAddress, this.state.password)}}
                   >
                       <Text style={styles.buttonText}>Login</Text>
                   </TouchableOpacity>

                   
                   <TouchableOpacity 
                   style={styles.button}
                   onPress={()=>{this.userSignUp(this.state.emailAddress, this.state.password)}}
                   >
                       <Text style={styles.buttonText}>Sign Up</Text>
                   </TouchableOpacity>
               </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8BE85',
        alignItems: 'center',
        justifyContent: 'center',
      },
    profileContainer: { 
        
        flex: 1, justifyContent: 'center', alignItems: 'center' ,
    marginTop:90
    },
  buttonContainer:{
     flex:1,
     alignItems:'center'
  },
    title: {
    fontSize: 65,
    fontWeight: '300',
    paddingBottom: 30,
    color: '#ff3d00',
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: '#ff8a65',
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
  
  registerButtonText: { color: '#ff5722', fontSize: 15, fontWeight: 'bold' },
  
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#ff9800',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10,
  },
  buttonText: { color: '#ffff', fontWeight: '200', fontSize: 20 },
})