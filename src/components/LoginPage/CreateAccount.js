import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import {StackNavigator} from 'react-navigation';
import * as firebase from 'firebase';
import { Input } from './Input';
import { storeData } from '../../Backend/DatabaseComponents';


export default class CreateAccount extends React.Component {
    
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {  
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            weight:'',
        }
    }

    storeDay = (input) => {
        this.setState({currentDay: input});
    }

    storeMonth = (input) => {
        this.setState({currentMonth: input});
    }

    storeFirst(input){
        this.setState({firstName: input});
    }

    storeLast(input){
        this.setState({lastName: input});
    }

    storeMail(input){
        this.setState({email: input});
    }

    storePassword(input){
        this.setState({password: input});
    }

    storeWeight(input){
        this.setState({weight: input});
    }

    createSuccess = () => {
        let current = new Date();
        firebase.database().ref('Accounts').child(this.getuid()).set({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            weight: this.state.weight,
            waterTarget: (parseInt(this.state.weight) * (2/3)),
            currentDate: current.getDate()
        });
        console.log(current.getDate() + " " + current.getMonth());
        this.props.navigation.navigate('HomePage');
    }
    Buttonclick = () => { 
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
            this.createSuccess
    )).catch(console.log("persistence error"));
    }

    failCreate = () => {
        console.log('error');
        Alert.alert(
            "Please enter valid email address and password"
        );
    }


    getuid(){
        return firebase.auth().currentUser.uid;
    }




    render() {
        return (
            <View>
            <TextInput
            style={styles.input}
            placeholder = 'FirstName'
            onChangeText={first => this.storeFirst(first)}
            />
            <TextInput
            style={styles.input}
            placeholder = 'LastName'
            onChangeText={last => this.storeLast(last)}
            />
            <TextInput
            style={styles.input}
            placeholder = 'Email'
            onChangeText={mail => this.storeMail(mail)}
            />
            <TextInput
            style={styles.input}
            placeholder = 'Password'
            onChangeText={pass => this.storePassword(pass)}
            />
            <TextInput
            style={styles.input}
            placeholder = 'Weight (lbs)'
            onChangeText={weight => this.storeWeight(weight)}
            />
            <Button
            title="Create Account"
            onPress={this.Buttonclick}
            />

        </View>
        ) 
    }



}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        backgroundColor: 'lightblue',
        padding: 20,

    },
})
