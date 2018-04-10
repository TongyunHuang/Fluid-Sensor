import React, { Component } from 'react';
import { AsyncStorage, AppRegistry, Text, TextInput, View, StyleSheet, Button} from 'react-native';
import Calculator from '../../Backend/Calculator';
import calculate from '../../Backend/Calculator';
import * as firebase from 'firebase';
import HomePage from './HomePage';
import { theuid } from '../LoginPage/Login'



export default class Fields extends Component{

    constructor(props){
        super(props);
        this.gotData = this.gotData.bind(this);
        this.state ={
            waterTarget:'',
            currentuid: '',
        }
    }

    
    userRef;


    componentWillMount(){
        AsyncStorage.getItem('uid', (error, result) => this.setuid(result));
        
    }

    seturef = (uid) => {
        this.userRef = firebase.database().ref('Accounts').child(uid);
        this.userRef.on('value', this.gotData, this.errorData);

    }
    setuid = (result) => {
        this.setState({currentuid: result}, this.seturef(result));
        console.log(this.state.currentuid);

    }

    resetTarget = () => {
        let current = new Date();
        let currentDate = current.getDate();
        let currentMonth = current.getMonth();
        

    }
    calculateTotal = (typedText) => {
        console.log(this.state.waterTarget);
        console.log(this.userRef);
        console.log(this.state.currentuid);
        
    }
    

    gotData(data) {
        let allData = data.val();
        this.setState({waterTarget: allData.waterTarget});
    }

    errorData(data) {
        console.log('Error!');
    }

    changeWater(){

        firebase.database().ref('Accounts').child(firebase.auth().currentUser.uid).update({
            waterTarget : 1
        });

       console.log(firebase.auth().currentUser.uid);
    }

    loguid(){
        AsyncStorage.getItem('uid', (error,result) => console.log(result));
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style= {styles.forLabel}>How much did you just drink?</Text>
                <TextInput
                ref={input => {this.textInput = input}}
                style={styles.input}
                placeholder = 'input here'
                onChangeText={(typedText) => {this.setState({text:parseInt(typedText)})}}
                />
                <Button
                style={styles.forButton}
                title = "Calculate!"
                onPress={this.calculateTotal}
                />
                <Text style= {styles.forLabel}>waterTarget: </Text>
                <Text style={styles.forText}>{this.state.waterTarget}</Text>
                <Text style= {styles.forLabel}>Month:</Text>
                <Text style={styles.forText}>{10}</Text>
                <Button
                title = "log uid"
                onPress={this.loguid}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{

    },
    input: {
        backgroundColor: 'lightblue',
        marginBottom: 20,
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,

    },
    forText:{
      backgroundColor: 'lightblue',
      height: 50,
      paddingTop: 15,
      paddingLeft: 20,
      paddingBottom: 20,
      
    
    },
    forLabel:{
        marginVertical: 5
    },
    forButton:{
        backgroundColor: 'black',
        marginBottom: 5,
    }
})