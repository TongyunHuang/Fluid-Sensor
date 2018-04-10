import React from 'react';
import { AsyncStorage, ActivityIndicator, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import {StackNavigator} from 'react-navigation';
import * as firebase from 'firebase';
import { Input } from './Input';
import { FBLogin } from './FBLoginButton';

//test@test.test
//test123

let theuid;

export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    }
    state = {
        email:'',
        password:'',
        authenticating: false,
        date: ''
    }

    componentWillMount() {


        
    }

    onPressSignIn(){
        this.setState({
            authenticating: true,
        });

    }

    storeEmail = (input) => {
        this.setState({email: input})
    }

    storePassword = (input) => {
        this.setState({password: input})
    }

    logSuccessful = () => {
        this.props.navigation.navigate('HomePage');
        //Stores UID to async storage
        AsyncStorage.setItem('uid', firebase.auth().currentUser.uid, () => {
            AsyncStorage.getItem('uid', (error, result) => {
                console.log(result);
                this.uid = result;
                console.log(this.uid);
            })
        });
    }
    logIn = () => {
        
        firebase.auth().signInWithEmailAndPassword(this.state.email, 
            this.state.password).then(this.logSuccessful)
            .catch(this.failLogin);
            

 
    }


    failLogin() {
        console.log('error');
        Alert.alert(
            "Invalid Username or Password",
        );
        () => this.props.navigation.navigate('LoginPage');

    }

    consoleDate = () => {
        let current = new Date();
        this.setState({date: current.getDate()}, function () {
            console.log(this.state.date);
        });
    }

    renderCurrentState() {
        if (this.state.authenticating){
            return (
                <View>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
        
        return (
            <View>
                <TextInput
                style={styles.input}
                placeholder = 'Email Address'
                onChangeText={mail => this.storeEmail(mail)}
                />
                <TextInput
                style={styles.input}
                placeholder = 'Password'
                onChangeText={pass => this.storePassword(pass)}
                />
                <Button
                style={styles.button}
                title="Log in"
                onPress={this.logIn}
                />
                <Button
                style={styles.button}
                title="Create Account"
                onPress={() => this.props.navigation.navigate('CreatePage')}
                />
                <Button
                style={styles.button}
                title="testDate"
                onPress={this.consoleDate}
                />
            </View>
      );
    }
    render() {
        return (
        <View style={styles.container}>
            {this.renderCurrentState()}
        </View>   
        ) 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height:50,
        backgroundColor:'rgba(151,201,210,0.35)',
        borderRadius:5,
        marginTop: 20,
        padding:16,
        fontSize:15

    },
    button:{
        fontSize:20,
        marginTop: 20,
        marginBottom:80,
        color:'#36526D',
        fontWeight:'bold',
        textAlign:'center'
    },
})

