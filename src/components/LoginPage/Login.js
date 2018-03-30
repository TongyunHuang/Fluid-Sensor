import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {StackNavigator} from 'react-navigation';
import * as firebase from 'firebase';
import { Input } from './Input';


export default class Login extends React.Component {
    state = {
        email:'',
        password:'',
        authenticating: false,
    }

    componentWillMount() {
        const firebaseConfig = {
            apiKey:'AIzaSyCpdIfRXW7YkJlEM7acEm54342PRXK9feA',
            authDomain: 'drink-758fb.firebaseapp.com',
        }
        firebase.initializeApp(firebaseConfig);
    }

    onPressSignIn(){
        this.setState({
            authenticating: true,
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
                <Input
                label="Enter email"
                placeholder="email address"
                onChangeText={email => this.setState({email})}
                value={this.state.email}
                />
                <Input
                label="Enter password"
                placeholder="Password"
                secureTextEntry
                onChangeText={password => this.setState({password})}
                value={this.state.password}
                />
                <Button
                title="Log in"
                onPress={this.onPressSignIn()}
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
    }
})
